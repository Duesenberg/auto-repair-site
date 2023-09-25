import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import logoIcon from '../icons/logo-icon.svg';
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import AboutPageHero from '../components/AboutPageHero';
import AboutPageAbout from "../components/AboutPageAbout";
import AboutPageStats from "../components/AboutPageStats";

const AboutPage: React.FC<PageProps> = () => {
  return (
      <div id="about-page">
      <Navigation />
      <main>
        <AboutPageHero />
        <AboutPageAbout />
        <AboutPageStats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href={logoIcon} />
    <meta name="description" content="Car repair services" />
    <meta name="keywords" content="car repair, repair services, mechanic" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GearHeads | About</title>
  </>
)
