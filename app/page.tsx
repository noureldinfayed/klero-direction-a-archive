import Chrome from '@/components/sections/Chrome'
import Hero from '@/components/sections/Hero'
import Method from '@/components/sections/Method'
import Cases from '@/components/sections/Cases'
import FooterCta from '@/components/sections/FooterCta'
import SiteFooter from '@/components/sections/SiteFooter'

export default function Page() {
  return (
    <>
      <Chrome />
      <main>
        <Hero />
        <Method />
        <Cases />
        <FooterCta />
      </main>
      <SiteFooter />
    </>
  )
}
