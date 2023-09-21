import React from 'react';
import aboutUsBackground from '../../images/about-us.jpg'
import aboutUsBackgroundMobile from '../../images/about-us-m.jpg'

function HomePageAbout() {
  return(
    <section>
      <div className="lg:flex lg:flex-row-reverse">
        <picture className="lg:flex-1 relative z-10">
          {/* Mobile Image*/}
          <source media="(max-width: 600px)" srcSet={aboutUsBackgroundMobile} />
          {/* Tablet and above Image */}
          <source media="(min-width: 601px)" srcSet={aboutUsBackground} />
          <img loading="lazy" decoding="async" src={aboutUsBackground}
          className="lg:object-cover lg:h-full" />
        </picture>

        <div className="lg:flex-1 relative bg-gray-100 dark:bg-gray-800">
          {/* Decorative Divs */}
          {/* Top */}
          <div className="invisible absolute top-12 bottom-12 h-auto mx-6 z-0 w-10/12 bg-gradient-to-r from-sky-200 dark:from-sky-950 to-transparent md:visible xl:left-10"
          ></div>
          {/* Decorative Divs ^ */}
          
          <div className="relative px-6 pt-8 z-10 flex flex-col gap-4 md:px-10 md:pt-16 xl:px-20">
            <span className="uppercase text-start text-sm text-gray-900 dark:text-gray-100 font-bold lg:text-base">Who We Are</span>
            <h2 className="text-4xl text-left text-gray-900 dark:text-gray-100 font-bold lg:text-5xl">Your Go-To Partners for Anything IT</h2>
          </div>

          <div className="relative z-10 items-center px-6 pb-8 flex flex-col gap-2 md:px-10 md:pb-16 xl:px-20">
            <p className="mt-8 mb-2 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              At ITBuddies, we are your trusted companions on the digital journey. With a passion for technology and a commitment to excellence, we have emerged as a premier IT company dedicated to solving your technology challenges and driving your business forward. 
            </p>
            <p className="mb-8 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              Our mission is to simplify the complex world of technology for businesses of all sizes. We understand that in today's fast-paced digital landscape, businesses need reliable and innovative IT solutions to stay competitive. Our goal is to be your partner in navigating this landscape, providing you with the tools and support you need to thrive.
            </p>
            <a href="#/about" 
            className="relative z-10 button-primary self-start">
              More About ITBuddy</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageAbout;
