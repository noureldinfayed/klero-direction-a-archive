import Chrome from '@/components/sections/Chrome'
import Hero from '@/components/sections/Hero'
import Method from '@/components/sections/Method'
import Cases from '@/components/sections/Cases'
import Why from '@/components/sections/Why'
import Team from '@/components/sections/Team'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'
import FooterCta from '@/components/sections/FooterCta'
import SiteFooter from '@/components/sections/SiteFooter'
import RevealRunner from '@/components/ui/RevealRunner'

export default function Page() {
  return (
    <>
      <Chrome />
      <main>
        <Hero />
        <Method />
        <Cases />
        <Why />
        <Team />
        <Faq />
        <Contact />
        <FooterCta />
      </main>
      <SiteFooter />
      <RevealRunner />
    </>
  )
}
