/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. A bookmark landing page.
 *
 * @link https://www.freecodecamp.org/news/how-to-build-forms-in-react/
 */

import Banner from "@/components/banner"
import Download from "@/components/download"
import FAQ from "@/components/faq"
import NewsletterSignup from "@/components/newsletter-signup"


export default function App() {
  return (
    <main id="main" className="" aria-label="Content">
      <Banner />
      <Download />
      <FAQ />
      <NewsletterSignup />
    </main>
  )
}
