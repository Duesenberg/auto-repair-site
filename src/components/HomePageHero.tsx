import React from "react";
import heroBackgroundMobile from '../images/hero-background-m.jpg';
import heroBackground from '../images/hero-background.jpg';

function HomePageHero() {
  return(
    <section>
      <div className="relative flex flex-col items-center pt-10 px-0 pb-0 gap-8 bg-gray-100 dark:bg-gray-950 dark:bg-opacity-60 bg-opacity-60 md:mx-auto lg:py-40 lg:pb-0 lg:gap-16">
        {/* Content */}
        <h1 className="mx-10 text-gray-900 dark:text-gray-100 my-8 text-5xl font-bold text-center md:max-w-2xl lg:text-6xl">Your Car, Your Way</h1>
        <p className="mx-10 text-gray-900 dark:text-gray-100  text-xl text-center md:max-w-2xl lg:text-2xl">
        Worry-free, expert mobile car repair and maintenance services right at your doorstep
        </p>
        <a href="/contact" 
        className="z-10 button-primary">
          Contact Us</a>

        <div className="z-10 bg-opacity-30 p-5 flex flex-col items-center gap-3 justify-between mt-16 justify-self-end self-stretch md:flex-row md:gap-0 bg-orange-400 dark:bg-orange-800 dark:bg-opacity-40">
          <p className="hero-bottom-text border-b-2 md:border-b-0 md:border-r-2"
          >&#9733;  Mobile Convenience  &#9733;</p>
          <p className="hero-bottom-text border-b-2  md:border-b-0 md:border-r-2"
          >&#9733;  Expert Technicians  &#9733;</p>
          <p className="hero-bottom-text"
          >&#9733;  Transparent Pricing &#9733;</p>
        </div>

        {/* Background Image */}
        <picture className="absolute top-0 left-0 -z-10 h-full">
            <source media="(max-width: 600px)" 
            srcSet={heroBackgroundMobile}  />

            <source media="(min-width: 601px)" 
            srcSet={heroBackground}  />

            <img loading="lazy" decoding="async" src={heroBackground} 
            alt="monitor" width="2250" height="1500" aria-hidden="true"
            className="object-cover h-full" />
        </picture>
      </div>
    </section>
  )
}

export default HomePageHero;
