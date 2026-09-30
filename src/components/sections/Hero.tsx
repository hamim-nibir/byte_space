import { Container } from '@/components/ui/Container'
import { SearchBar } from '@/components/ui/SearchBar'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary bg-grid pt-30 text-white"
    >
      <Container className="relative z-10 flex min-h-[900px] flex-col items-center text-center">
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
    </section>
  )
}