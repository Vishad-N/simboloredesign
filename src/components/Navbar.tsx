import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <nav className="max-w-[1320px] mx-auto glass-nav rounded-full px-6 py-3 md:py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo1.png"
            alt="Simbolo Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <div className="hidden md:block leading-none">
            <h1 className="font-heading font-bold text-dark text-lg">Simbolo</h1>
            <p className="text-[10px] text-soft font-medium uppercase tracking-wider">
              Creative Agency
            </p>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm text-dark">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="nav-link hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-primary hover:bg-[#35b5b8] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-glow-primary hover:-translate-y-0.5"
          >
            Contact Us
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
