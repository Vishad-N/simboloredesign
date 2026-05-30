import Link from "next/link";
import Image from "next/image";
import FloatingArrow from "@/components/ui/FloatingArrow";
import Stacked3DCard from "@/components/ui/Stacked3DCard";

const services = [
  {
    number: "01",
    slug: "digital-marketing",
    title: "Digital Marketing",
    items: ["Social Media Campaigns", "Paid Advertising", "Email Marketing"],
    image: "/dm.jpeg",
    numberColor: "text-skyblue",
    linkColor: "text-skyblue",
    borderHover: "hover:border-skyblue/30",
    bgBlob: "bg-skyblue/5",
    bgBlobHover: "group-hover:bg-skyblue/20",
    iconBg: "bg-gradient-to-br from-skyblue/20 to-skyblue/5",
    iconColor: "text-skyblue",
    dotColor: "bg-skyblue/50",
    iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    iconPath2: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  },
  {
    number: "02",
    slug: "brand-identity-design",
    title: "Graphic Design",
    items: ["Logo & Guidelines", "Print Media", "Stationery Design"],
    image: "/gd.jpg",
    numberColor: "text-primary",
    linkColor: "text-primary",
    borderHover: "hover:border-primary/30",
    bgBlob: "bg-primary/5",
    bgBlobHover: "group-hover:bg-primary/20",
    iconBg: "bg-gradient-to-br from-primary/20 to-primary/5",
    iconColor: "text-primary",
    dotColor: "bg-primary/50",
    iconPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    number: "03",
    slug: "motion-video-production",
    title: "Motion & Video Editing",
    items: ["Explainer Videos", "Video Editing", "Motion Posters"],
    image: "/ve.jpg",
    numberColor: "text-purple",
    linkColor: "text-purple",
    borderHover: "hover:border-purple/30",
    bgBlob: "bg-purple/5",
    bgBlobHover: "group-hover:bg-purple/20",
    iconBg: "bg-gradient-to-br from-purple/20 to-purple/5",
    iconColor: "text-purple",
    dotColor: "bg-purple/50",
    iconPath:
      "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
    iconPath2: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "04",
    slug: "web-design",
    title: "Web Design",
    items: ["Responsive Websites", "Landing Pages", "Conversion-Focused UI"],
    image: "/wd.jpg",
    numberColor: "text-orange",
    linkColor: "text-orange",
    borderHover: "hover:border-orange/30",
    bgBlob: "bg-orange/5",
    bgBlobHover: "group-hover:bg-orange/20",
    iconBg: "bg-gradient-to-br from-orange/20 to-orange/5",
    iconColor: "text-orange",
    dotColor: "bg-orange/50",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    number: "05",
    slug: "ecommerce",
    title: "E-commerce",
    items: ["Shopify Stores", "Product Marketing", "Conversion Optimization"],
    image: "/ec.jpg",
    numberColor: "text-primary",
    linkColor: "text-primary",
    borderHover: "hover:border-primary/30",
    bgBlob: "bg-primary/5",
    bgBlobHover: "group-hover:bg-primary/20",
    iconBg: "bg-gradient-to-br from-primary/20 to-primary/5",
    iconColor: "text-primary",
    dotColor: "bg-primary/50",
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-soft text-lg">
            We provide everything you need to grow your brand and succeed online.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto lg:overflow-visible pb-10 hide-scrollbar snap-x">
          {services.map((service) => (
            <Stacked3DCard
              key={service.number}
              containerClassName="min-w-[280px] snap-center"
              className={`bg-white/5 border border-white/10 p-6 ${service.borderHover} relative flex flex-col min-h-[420px]`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[28px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 280px, 20vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Default dark fade for bare image readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-700" />
                
                {/* White glass overlay on hover (always on mobile) */}
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.85),rgba(255,255,255,0.4))] backdrop-blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${service.bgBlob} rounded-full blur-2xl ${service.bgBlobHover} opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 z-0`}
              />
              <div className="relative z-10 opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col h-full">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.iconPath}
                    />
                    {service.iconPath2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={service.iconPath2}
                      />
                    )}
                  </svg>
                </div>
                
                <div className="mt-auto">
                  <span className={`${service.numberColor} font-bold text-sm mb-2 block`}>
                    {service.number}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-3 leading-tight">{service.title}</h3>
                  <ul className="space-y-2.5 mb-8 text-sm text-dark/70 font-semibold">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.dotColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${service.slug}`}
                    className={`${service.linkColor} font-bold text-sm flex items-center gap-1 transition-all group/link`}
                  >
                    Learn More <FloatingArrow />
                  </Link>
                </div>
              </div>
            </Stacked3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
