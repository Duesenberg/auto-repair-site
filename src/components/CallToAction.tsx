import React from 'react';
import contactUsMobileBg from '../images/contact-us-m.jpg';
import contactUsBg from '../images/contact-us.jpg';

function CallToAction() {
  return(
    <section>
      <div className="relative flex flex-col items-center p-8 gap-8 bg-gray-100 dark:bg-gray-950 bg-opacity-60 dark:bg-opacity-60 md:px-10 md:py-16 lg:py-20 xl:py-32 lg:gap-10 overflow-hidden">
        <div className="items-center pb-8 flex flex-col gap-2">
          <span className="uppercase text-start text-sm text-gray-900 dark:text-gray-100 font-bold self-start lg:text-base md:self-center">Contact Us</span>
          <h2 className="text-4xl text-left text-gray-900 dark:text-gray-100 font-bold self-start lg:text-5xl md:self-center">Let Us Help You Out</h2>
          <p className="mt-8 mb-2 text-justify text-base text-gray-900 dark:text-gray-100 md:text-center lg:text-lg lg:mx-40 xl:mx-80">
            Contact us by sending us an e-mail and letting us know about what you need, or just give us a call. We will get back to you as soon as we can!
          </p>
          <a href="#/contact" className="button-primary self-start md:self-center lg:mt-10">
            Contact Us</a>
        </div>

        {/* Background Image */}
        <picture className="absolute top-0 left-0 -z-10 h-full">
          <source media="(max-width: 600px)" srcSet={contactUsMobileBg} />

          <source media="(min-width: 601px)" srcSet={contactUsBg} />

          <img loading="lazy" decoding="async" src={contactUsBg} 
          alt="contact" aria-hidden="true" width="2250" height="1500"
          className="object-cover h-full" />
        </picture>
      </div>
    </section> 
  )
}

export default CallToAction;
