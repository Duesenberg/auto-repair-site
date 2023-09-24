import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import logoIcon from '../icons/logo-icon.svg';
import Footer from "../components/Footer";
import ServicesPageHero from '../components/ServicesPageHero';
import ServicesPageServices from '../components/ServicesPageServices';
import CallToAction from "../components/CallToAction";

const HomePage: React.FC<PageProps> = () => {
  return (
      <div id="services-page">
      <Navigation />
      <main>
        <ServicesPageHero />
        <ServicesPageServices />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href={logoIcon} />
    <meta name="description" content="Car repair services" />
    <meta name="keywords" content="car repair, repair services, mechanic" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GearHeads | Services</title>
  </>
)