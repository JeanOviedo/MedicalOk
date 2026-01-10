import { Hero } from "@/components/sections/hero"
import { FeaturedSpecialties } from "@/components/sections/featured-specialties"
import { FeaturedDoctors } from "@/components/sections/featured-doctors"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Hero />
      <FeaturedSpecialties />
      <FeaturedDoctors />
    </div>
  );
}
