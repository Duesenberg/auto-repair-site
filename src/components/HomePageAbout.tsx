import React from 'react';
import aboutUsBackground from '../images/about-us.jpg'
import aboutUsBackgroundMobile from '../images/about-us-m.jpg'

function HomePageAbout() {
  return(
    <section>
      <div className="lg:flex lg:flex-row-reverse">
        <picture className="lg:flex-1 relative z-10 lg:border-t-8 lg:border-l-8 lg:border-b-8 lg:border-solid lg:border-gray-100 dark:lg:border-gray-800">
          {/* Mobile Image*/}
          <source media="(max-width: 600px)" srcSet={aboutUsBackgroundMobile} />
          {/* Tablet and above Image */}
          <source media="(min-width: 601px)" srcSet={aboutUsBackground} />
          <img loading="lazy" decoding="async" src={aboutUsBackground}
          className="lg:object-cover lg:h-full" alt='mechanic working on car' />
        </picture>

        <div className="lg:flex-1 relative bg-orange-300 dark:bg-gray-800">
          <div className="relative px-6 pt-8 z-10 flex flex-col gap-4 md:px-10 md:pt-16 xl:px-20">
            <span className="uppercase text-start text-sm text-gray-900 dark:text-gray-100 font-bold lg:text-base">About Us</span>
            <h2 className="text-4xl text-left text-gray-900 dark:text-gray-100 font-bold lg:text-5xl">The Best Mobile Mechanics Around</h2>
          </div>

          <div className="relative z-10 items-center px-8 pb-8 flex flex-col gap-2 md:px-10 md:pb-16 xl:px-20">
            <p className="mt-8 mb-2 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              At GearHeads, we're driven by a passion for cars and a commitment to convenience. Our mission is to keep you on the road, worry-free, with expert mobile car repair and maintenance services right at your doorstep. 
            </p>
            <p className="mb-8 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              Founded by a team of seasoned automotive enthusiasts, GearHeads is not just a company – it's a lifestyle. We understand the profound connection between you and your vehicle, and that's why we've dedicated ourselves to providing top-notch, hassle-free automotive care.
            </p>
            <a href="/about" 
            className="relative z-10 button-primary self-start">
              More About GearHeads</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageAbout;
