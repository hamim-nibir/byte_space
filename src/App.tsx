import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { PartnersStrip } from '@/components/sections/PartnersStrip'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnersStrip />
      </main>
    </>
  )
}