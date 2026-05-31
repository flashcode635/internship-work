"use client";
import { useEffect, useRef } from "react";

const testimonials: TestimonialCardProps[] = [
  {
    name: "Sarah Mitchel",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "This tool has completely transformed how our team collaborates. The intuitive interface and lightning-fast performance make every project feel effortless.",
  },
  {
    name: "James Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "I've tried dozens of similar tools but nothing comes close. The attention to detail and developer experience here is unmatched.",
  },
  {
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "Outstanding product that delivers on every promise. Our team's productivity has doubled since we started using it.",
  },
  {
    name: "Michael Park",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    text: "Rare to find a tool that balances power with simplicity so well. It's now an essential part of our daily workflow.",
  },
  {
    name: "Olivia Thompson",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "The support team is incredible and the product keeps getting better. Every update brings meaningful improvements.",
  },
  {
    name: "David Kim",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    text: "Game changer for our startup. We were able to ship features 3x faster after switching to this workflow.",
  },
];
export type TestimonialCardProps = {
    name: string;
    avatar: string;
    rating: number;
    text: string;
};
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-700/50"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({
  name,
  avatar,
  rating,
  text,
}: TestimonialCardProps) => (
  <div className="group flex min-h-full w-[320px] md:w-[400px] flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.2)]">
    <div className="flex items-center gap-4">
      <img
        className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20 transition-all duration-500 group-hover:ring-cyan-400/60"
        src={avatar}
        alt={name}
      />
      <div>
        <p className="font-semibold text-white tracking-wide">{name}</p>      
      </div>
    </div>

    <StarRating rating={rating} />

    <p className="flex-1 text-[17px] leading-relaxed text-gray-300/90 font-light">
      &ldquo;{text}&rdquo;
    </p>
  </div>
);

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // px per frame
    let paused = false;

    const totalWidth = track.scrollWidth / 2; // one full set of cards

    const animate = () => {
      if (!paused) {
        position += speed;
        if (position >= totalWidth) position = 0;
        track.style.transform = `translateX(${-position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    const pause = () => (paused = true);
    const play = () => (paused = false);

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4 rounded-full bg-yellow-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center w-full relative z-10">         

          <h2 className="md:text-6xl text-4xl font-extrabold tracking-tight pb-2 bg-linear-to-r from-[#00d2ff] to-[#ffd700] bg-clip-text text-transparent drop-shadow-md">
              Loved by teams worldwide
          </h2>
          
          <p className="mt-4 md:text-xl text-lg text-gray-400/80 font-medium">
            Don't just take our word for it — hear from our community.
          </p>
        </div>

        {/* Carousel viewport */}
        <div className="group relative overflow-hidden">
          {/* gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-black  
          via-(--container-bg)
          to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-black via-(--container-bg) to-transparent" />

          {/* Scrolling track — duplicate items for a seamless loop */}
          <div
            ref={trackRef}
            className="flex gap-5 md:px-3"
            style={{ width: "max-content" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
