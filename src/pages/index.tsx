import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import logoIcon from '../icons/logo-icon.svg';
import HomePageHero from "../components/HomePageHero";
import HomePageServices from "../components/HomePageServices";
import HomePageAbout from "../components/HomePageAbout";
import HomePageReviews from "../components/HomePageReviews";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const HomePage: React.FC<PageProps> = () => {
  return (
      <div id="home-page">
      <Navigation />
      <main>
        <HomePageHero />
        <HomePageServices />
        <HomePageAbout />
        <HomePageReviews />
        <CallToAction />
      </main>
      {/* <Footer /> */}
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
    <title>GearHeads | Home</title>
  </>
)
