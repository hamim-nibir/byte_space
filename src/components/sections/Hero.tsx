import { Container } from '@/components/ui/Container'
import { SearchBar } from '@/components/ui/SearchBar'
import { HeroFloatingCards } from '@/components/sections/HeroFloatingCards'
import { HeroShapes } from '@/components/sections/HeroShapes'
import heroPerson from '@/assets/images/hero-person.png'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[820px] overflow-hidden bg-primary bg-grid pt-30 text-white lg:min-h-[1020px]"
    >
      {/* Lime circle: only the top dome is visible */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[340px] left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-accent lg:-bottom-[691px] lg:size-[1128px]"
      />

      <HeroShapes />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <h1 className="mt-10 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
          Get Access to Hundreds
          <br className="hidden lg:block" /> Courses Available
        </h1>

        <p className="mt-6 max-w-xl text-sm text-white/80">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <SearchBar className="mt-10 w-full justify-center" />
      </Container>

      <img
        src={heroPerson}
        alt="Smiling student with headphones holding a laptop"
        fetchPriority="high"
        className="absolute bottom-0 left-1/2 z-10 w-[380px] -translate-x-1/2 md:w-[560px] lg:w-[720px]"
      />

      <HeroFloatingCards />
    </section>
  )
}