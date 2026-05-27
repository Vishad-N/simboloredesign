import Image from "next/image";

const testimonials = [
  {
    quote:
      "“Simbolo completely transformed our brand identity. Their attention to detail and creative vision helped us double our engagement in just 3 months. Absolute magic!”",
    name: "Sarah Jenkins",
    role: "CMO, Nutriyo",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    extraClass: "",
  },
  {
    quote:
      "“The UI/UX design they delivered for our new app is flawless. It’s clean, modern, and highly converting. The team is professional and truly cares about results.”",
    name: "Michael Torres",
    role: "Founder, FitTrack",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    extraClass: "mt-0 lg:mt-8",
  },
  {
    quote:
      "“From social media to video ads, they handle everything with extreme professionalism. Our lead generation has skyrocketed since partnering with them.”",
    name: "Emily Rossi",
    role: "Marketing Dir, Travelista",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    extraClass: "",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[#f8fbff]" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-skyblue/10 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-orange/10 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

      <div className="max-w-[1320px] mx-auto text-center mb-16 relative z-10">
        <span className="inline-block bg-white text-purple font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm border border-purple/10">
          Reviews
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
          Client Reviews
        </h2>
      </div>

      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`glass-testimonial rounded-[32px] p-8 md:p-10 flex-1 hover:-translate-y-2 transition-transform duration-500 ${t.extraClass}`}
          >
            <div className="flex text-orange mb-6 text-xl">★★★★★</div>
            <p className="text-dark font-medium text-lg leading-relaxed mb-8">{t.quote}</p>
            <div className="flex items-center gap-4">
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="text-left">
                <h5 className="font-heading font-bold text-dark text-lg">{t.name}</h5>
                <p className="text-sm text-soft">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-dark hover:text-primary transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-dark hover:text-primary transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
