import React from 'react';
import hireTeamBg from '../../images/hire-team.jpg';
import hostingMgmgtBg from '../../images/hosting-maagement.jpg';
import supportBg from '../../images/support.jpg';
import webDevTeamBg from '../../images/webdev-team.jpg';

function HomePageServices() {
  return(
    <section>
      <div id="homePageServices" className="flex flex-col px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-sky-500 dark:bg-sky-950"
        ></div>
        <div className="invisible absolute top-12 left-0 mx-6 h-1/5 z-0 w-1/3 bg-gradient-to-b from-sky-400 dark:from-sky-900 to-transparent md:visible xl:left-10"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        <div className="absolute bottom-0 left-0 h-56 z-0 w-full bg-sky-500 dark:bg-sky-950"
        ></div>
        {/* Decorative Divs ^ */}
        
        <div className="flex flex-col gap-4 z-10">
          <span className="uppercase text-start text-sm text-gray-100 font-bold lg:text-base">What we Do</span>
          <h2 className="text-4xl text-left text-gray-100 font-bold lg:text-5xl">IT Services</h2>
        </div>
        
        <div className="flex flex-col gap-8 items-center z-10 md:grid md:grid-cols-2 md:justify-items-center md:gap-16 md:items-stretch xl:grid-cols-2 xl:px-10">
          <a href="#/services" className="service-card">
            <img src={hireTeamBg} alt="hire a team" 
            decoding="async" loading="lazy" aria-hidden='true' className="service-card-image" />

            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Hire an Independent Team</h3>
              <p className="service-card-info-text">Hire and work alongside an experienced and independent team, available 24/7.</p>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePageServices;
