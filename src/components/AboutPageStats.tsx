import React from "react";

function AboutPageStats () {
  return(
    <div>
      <ul className="flex flex-col px-6 py-8 gap-10 bg-orange-500 dark:bg-orange-800 md:flex-row items-stretch">
        <li className="about-us-stats-li">
            <picture className="invert dark:invert-0" aria-hidden="true">
                <img className="" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone-grey.svg" alt="icon" width="35" height="40" loading="lazy" decoding="async" />
            </picture>

            <div className="flex flex-col gap-1 items-start">
                <span className="uppercase text-start text-lg text-gray-900 dark:text-gray-100 font-bold">Contact</span>
                <a href="tel:012-345-6789" className="footer-nav-link hover:text-orange-500">(012) 345-6789</a>
                <a href="mailto:info@itbuddies.com" className="footer-nav-link hover:text-orange-500">info@itbuddies.com</a>
            </div>
        </li>

        <li className="about-us-stats-li">
            <picture className="invert dark:invert-0" aria-hidden="true">
                <img className="" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin-grey.svg" alt="icon" width="40" height="35" loading="lazy" decoding="async" />
            </picture>

            <div className="flex flex-col gap-1 items-start">
                <span className="uppercase text-start text-lg text-gray-900 dark:text-gray-100 font-bold">Address</span>
                <a href="/" className="footer-nav-link hover:text-orange-500" target="_blank">Los Angeles, CA</a>
            </div>
        </li>

        <li className="about-us-stats-li">
            <picture className="invert dark:invert-0" aria-hidden="true">
                <img className="" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/clock-grey.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" />
            </picture>

            <div className="flex flex-col gap-1 items-start">
                <span className="uppercase text-start text-lg text-gray-900 dark:text-gray-100 font-bold">Open Hours</span>
                <span className="footer-nav-link hover:text-orange-500">Monday To Friday</span>
                <span className="footer-nav-link hover:text-orange-500">8:00 AM - 5:00 PM</span>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default AboutPageStats;
