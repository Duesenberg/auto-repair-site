import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import logoIcon from '../icons/logo-icon.svg';
import Footer from "../components/Footer";
import ContactPageHero from "../components/ContactPageHero";
import ContactPageContact from "../components/ContactPageContact";

const ReviewsPage: React.FC<PageProps> = () => {
  return (
      <div id="contact-page">
      <Navigation />
      <main>
        <ContactPageHero />
        <ContactPageContact />
      </main>
      <Footer />
    </div>
  )
}

export default ReviewsPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href={logoIcon} />
    <meta name="description" content="Car repair services" />
    <meta name="keywords" content="car repair, repair services, mechanic" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GearHeads | Contact</title>
  </>
)
