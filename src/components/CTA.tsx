import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 px-4 md:px-8 relative z-20">
      <div className="max-w-[1320px] mx-auto bg-gradient-to-r from-primary to-skyblue rounded-[40px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-glow-primary">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-2xl -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-white text-center lg:text-left max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
              Ready to Grow <br />
              Your Brand?
            </h2>
            <p className="text-white/90 text-xl font-medium">
              Let's build something great. Contact us today to start your next project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#contact"
              className="bg-white text-dark hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
            >
              Start Your Project
            </Link>
            <a
              href="tel:+918982948199"
              className="bg-dark/10 hover:bg-dark/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>

        <Image
          src="https://illustrations.popsy.co/amber/success.svg"
          alt="Mascot Peeking"
          width={300}
          height={300}
          className="hidden lg:block absolute -bottom-10 right-20 w-[300px] object-contain opacity-90 hover:translate-y-[-10px] transition-transform duration-500 z-0 pointer-events-none drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
