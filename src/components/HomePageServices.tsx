import React from 'react';
import oilIcon from '../icons/oil-can-svgrepo-com.svg';
import engineIcon from '../icons/engine-motor-svgrepo-com.svg';
import wrenchIcon from '../icons/wrench-hammer-svgrepo-com.svg';
import tyreIcon from '../icons/tire-svgrepo-com.svg';
import repairIcon from '../icons/repair-svgrepo-com.svg';
import safeIcon from '../icons/plus-1455-svgrepo-com.svg';
import diagIcon from '../icons/diagnose-svgrepo-com.svg';
import fuelIcon from '../icons/fuel-svgrepo-com.svg';
import powerIcon from '../icons/power-svgrepo-com.svg';
import fanIcon from '../icons/fan-svgrepo-com.svg';
import iceIcon from '../icons/winter-freeze-svgrepo-com.svg';
import comfIcon from '../icons/air-conditioner-svgrepo-com.svg';

function HomePageServices() {
  return(
    <section>
      <div id="homePageServices" className="flex flex-col items-center px-6 py-4 gap-10 bg-gray-100 dark:bg-gray-900 relative md:px-10 md:py-8 xl:px-20 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-orange-500 dark:from-pink-950 to-transparent"
        ></div>
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-52 z-0 w-full bg-orange-300"
        ></div>

        <div className="bg-gray-100 p-4 bg-opacity-50 flex flex-col gap-8 items-center z-10 md:p-8 md:grid md:grid-cols-2 md:justify-items-center md:gap-16 md:items-stretch xl:grid-cols-2 xl:px-10">
          <a href="#/services" className="service-card">
            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Oil Change & Fluid Check</h3>
              <p className="service-card-info-text">Always keep your engine and other parts well lubricated. Let us do the dirty work, hassle free.</p>
              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={engineIcon} alt="" />
                  <p className='sc-li-txt'>Engine longevity</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={wrenchIcon} alt="" />
                  <p className='sc-li-txt'>Expert oil change</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={oilIcon} alt="" />
                  <p className='sc-li-txt'>Quality oil products</p>
                </li>
              </ul>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="#/services" className="service-card">
            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Brake Repair and Inspection</h3>
              <p className="service-card-info-text">Safety first. Get your brake system diagnosed and needed repairs made.</p>
              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={tyreIcon} alt="" />
                  <p className='sc-li-txt'>Brake diagnostics/repairs</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={repairIcon} alt="" />
                  <p className='sc-li-txt'>Brake pad replacement</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={safeIcon} alt="" />
                  <p className='sc-li-txt'>Safety and peace of mind</p>
                </li>
              </ul>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="#/services" className="service-card">
            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Engine Diagnostics and Tune-Up</h3>
              <p className="service-card-info-text">Keep your engine in good health with our expert services.</p>
              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={diagIcon} alt="" />
                  <p className='sc-li-txt'>State-of-the-art diagnostics</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={fuelIcon} alt="" />
                  <p className='sc-li-txt'>Fuel system cleaning</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={powerIcon} alt="" />
                  <p className='sc-li-txt'>Improved efficiency and power</p>
                </li>
              </ul>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>

          <a href="#/services" className="service-card">
            <div className="service-card-info-wrapper">
              <h3 className="service-card-info-title">Air Conditioning Service & Repair</h3>
              <p className="service-card-info-text">Our experts will make sure your rides are always comfortable.</p>
              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={comfIcon} alt="" />
                  <p className='sc-li-txt'>Stay comfortable in all seasons</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={fanIcon} alt="" />
                  <p className='sc-li-txt'>A/C system diagnostics</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={iceIcon} alt="" />
                  <p className='sc-li-txt'>Efficient cooling & air circulation</p>
                </li>
              </ul>
              <p className="service-card-info-action">Learn more</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePageServices;
