import React from 'react';
import aboutUsBgMobile from '../images/about-us-page-m.jpg';
import aboutUsBg from '../images/about-us-page.jpg';
import carIcon from '../icons/car-side-svgrepo-com.svg';
import mechanicIcon from '../icons/mechanic-worker-svgrepo-com.svg';
import moneyIcon from '../icons/money-svgrepo-com.svg';
import timeIcon from '../icons/time-svgrepo-com.svg';

function AboutPageAbout () {
  return(
    <section>
      <div id='aboutPageAbout' className="relative lg:flex bg-gray-100 dark:bg-gray-800">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-gradient-to-b from-sky-500 dark:from-pink-950 to-transparent dark:opacity-40 opacity-40"
        ></div>
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-80 z-0 w-full bg-gradient-to-t from-orange-500 dark:from-orange-800 to-transparent"
        ></div>
        {/* Decorative Divs ^ */}

        {/* Div between Hero and About. Only visible on Mobile */}
        <div className='relative lg:invisible'>
          <div className='absolute top-0 left-0 z-10 w-full h-10 bg-orange-500 dark:bg-orange-800 shadow-inner shadow-gray-900'></div>
          <div id="grateBg" className='relative h-10 z-10 w-full opacity-70'></div>
        </div>

        {/* Picture */}
        <picture className="lg:flex-1 relative z-0">
          {/* Mobile Image*/}
          <source media="(max-width: 600px)" srcSet={aboutUsBgMobile} />
          {/* Tablet and above Image */}
          <source media="(min-width: 601px)" srcSet={aboutUsBg} />
          <img loading="lazy" decoding="async" src={aboutUsBg}
          className="lg:object-cover lg:h-full" alt='two mechanics' />
        </picture>

        {/* Description */}
        <div className="flex-1 relative">
          {/* Decorative Div */}
          <div className="absolute top-0 left-0 h-48 z-0 w-full bg-orange-500 dark:bg-orange-800"
          ></div>

          <div className="relative px-8 pt-8 z-10 flex flex-col gap-4 md:px-10 md:pt-16 xl:px-20">
            <span className="uppercase text-start text-sm text-gray-900 dark:text-gray-100 font-bold lg:text-base">About Us</span>
            <h2 className="text-4xl text-left text-gray-900 dark:text-gray-100 font-bold lg:text-5xl">Over 5 Years of Handywork on the Move</h2>
          </div>

          <div className="relative z-10 items-center px-8 pb-8 flex flex-col gap-2 md:px-10 md:pb-16 xl:px-20">
            <p className="mt-8 mb-2 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              At GearHeads, we're driven by a passion for cars and a commitment to convenience. Our mission is to keep you on the road, worry-free, with expert mobile car repair and maintenance services right at your doorstep.
            </p>

            <p className="mb-8 text-justify text-base text-gray-900 dark:text-gray-100 lg:text-lg">
              Founded by a team of seasoned automotive enthusiasts, GearHeads is not just a company – it's a lifestyle. We understand the profound connection between you and your vehicle, and that's why we've dedicated ourselves to providing top-notch, hassle-free automotive care.
            </p>

            <h3 className="self-start text-2xl text-gray-900 dark:text-gray-100 font-bold lg:text-3xl mb-8">What sets us apart?</h3>

            <ul className='about-us-ul'>
              <li className='about-us-li'>
                <img src={carIcon} alt="car" className='about-us-li-icon' />
                <h4 className='about-us-li-heading'>Mobile Convenience</h4>
                <p className='about-us-li-text'>We bring the garage to you. Say goodbye to long waits at repair shops and the hassle of arranging transportation while your car is serviced.</p>
              </li>

              <li className='about-us-li'>
                <img src={mechanicIcon} alt="car" className='about-us-li-icon' />
                <h4 className='about-us-li-heading'>Expert Technicians</h4>
                <p className='about-us-li-text'>Our team consists of highly skilled, certified technicians who are passionate about what they do.</p>
              </li>
              
              <li className='about-us-li'>
                <img src={moneyIcon} alt="car" className='about-us-li-icon' />
                <h4 className='about-us-li-heading'>Transparent Pricing</h4>
                <p className='about-us-li-text'>We believe in fair and transparent pricing. You'll always know the cost of our services upfront, with no hidden fees or surprises.</p>
              </li>
              
              <li className='about-us-li'>
                <img src={timeIcon} alt="car" className='about-us-li-icon' />
                <h4 className='about-us-li-heading'>Timely Service</h4>
                <p className='about-us-li-text'>Your time is valuable, and we respect that. GearHeads aims to get you back on the road as quickly as possible without compromising on the quality of our work.</p>
              </li>
            </ul>

            <a href="/contact" 
            className="relative z-10 button-primary self-start">
              Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPageAbout;
