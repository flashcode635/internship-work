import TestimonialsCarousel  from "@/components/testimonials";

export default function Home() {
  return (
   <>
      <div className="w-full h-screen m-0 p-0 bg-green-300"></div>
      <div className="w-full h-screen m-0 p-0 bg-linear-to-b from-(--container-bg) via-15% to-white "></div>
      <TestimonialsCarousel/>
   </>
  );
}
