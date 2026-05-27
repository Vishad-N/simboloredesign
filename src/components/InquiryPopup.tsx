"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

const popupSessionKey = "simbolo-inquiry-popup-shown";

const fields = [
  {
    id: "inquiry-name",
    label: "Your Name",
    name: "name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    id: "inquiry-brand",
    label: "Brand / Company Name",
    name: "brand",
    type: "text",
    required: true,
    autoComplete: "organization",
  },
  {
    id: "inquiry-email",
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    id: "inquiry-phone",
    label: "Phone Number",
    name: "phone",
    type: "tel",
    required: false,
    autoComplete: "tel",
  },
];

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.sessionStorage.getItem(popupSessionKey)) return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(popupSessionKey, "true");
      setIsOpen(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function keepFocusInside(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) return;

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-dark/55 px-4 py-6 backdrop-blur-md md:px-8"
          onMouseDown={() => setIsOpen(false)}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-popup-title"
            aria-describedby="inquiry-popup-description"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.38, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
            onKeyDown={keepFocusInside}
            className="relative w-full max-w-[620px] overflow-hidden rounded-[36px] border border-white/15 bg-dark p-5 text-white shadow-[0_36px_120px_-38px_rgba(15,23,42,0.95)] outline-none sm:p-7 md:p-9"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(61,199,203,0.24),transparent_34%),radial-gradient(circle_at_88%_14%,rgba(77,168,255,0.24),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[35px] border border-white/10" />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close inquiry form"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative pr-14">
              <span className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Contact Us
              </span>
              <h2
                id="inquiry-popup-title"
                className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Start a Project.
              </h2>
              <p
                id="inquiry-popup-description"
                className="mt-4 max-w-lg text-sm leading-7 text-white/68 sm:text-base"
              >
                Send us a message and we'll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative mt-7 grid gap-3.5 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-semibold text-white/84">
                  <span>
                    {field.label}
                    {field.required && <span aria-hidden="true"> *</span>}
                  </span>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    className="h-13 w-full rounded-2xl border border-white/12 bg-white/[0.09] px-4 text-base text-white shadow-inner outline-none transition placeholder:text-white/35 focus:border-primary/60 focus:bg-white/[0.12] focus:ring-2 focus:ring-primary/25"
                  />
                </label>
              ))}

              <label
                htmlFor="inquiry-help"
                className="grid gap-2 text-sm font-semibold text-white/84 sm:col-span-2"
              >
                <span>What can we help with?</span>
                <textarea
                  id="inquiry-help"
                  name="message"
                  rows={3}
                  className="min-h-28 w-full resize-none rounded-[24px] border border-white/12 bg-white/[0.09] px-4 py-3 text-base text-white shadow-inner outline-none transition placeholder:text-white/35 focus:border-primary/60 focus:bg-white/[0.12] focus:ring-2 focus:ring-primary/25"
                />
              </label>

              <button
                type="submit"
                className="mt-2 min-h-14 w-full rounded-2xl bg-gradient-to-r from-primary to-skyblue px-6 py-4 font-heading text-sm font-extrabold tracking-[0.18em] text-white shadow-glow-primary transition-all hover:-translate-y-0.5 hover:shadow-glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark sm:col-span-2"
              >
                SEND INQUIRY <span aria-hidden="true">&rarr;</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
