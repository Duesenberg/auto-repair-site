import React from 'react';
import oilContIcon from '../icons/oil-container-svgrepo-com.svg';
import oilIcon from '../icons/oil-can-svgrepo-com.svg';
import engineIcon from '../icons/engine-motor-svgrepo-com.svg';
import wrenchIcon from '../icons/wrench-hammer-svgrepo-com.svg';
import brakeDiscIcon from '../icons/disc-brake-svgrepo-com.svg';
import tyreIcon from '../icons/tire-svgrepo-com.svg';
import repairIcon from '../icons/repair-svgrepo-com.svg';
import safeIcon from '../icons/plus-1455-svgrepo-com.svg';
import diagIcon from '../icons/diagnose-svgrepo-com.svg';
import fuelIcon from '../icons/fuel-svgrepo-com.svg';
import powerIcon from '../icons/power-svgrepo-com.svg';
import acIcon from '../icons/air-condition-svgrepo-com.svg';
import fanIcon from '../icons/fan-svgrepo-com.svg';
import iceIcon from '../icons/winter-freeze-svgrepo-com.svg';
import comfIcon from '../icons/air-conditioner-svgrepo-com.svg';
import treadIcon from '../icons/tread-svgrepo-com.svg';
import balanceIcon from '../icons/balance-1-svgrepo-com.svg';
import pressureIcon from '../icons/pressure-svgrepo-com.svg';
import carBatIcon from '../icons/car-battery-svgrepo-com.svg';
import batCheckIcon from '../icons/calendar-check-svgrepo-com.svg';
import batSwIcon from '../icons/switch-horizontal-svgrepo-com.svg';

function ServicesPageServices() {
  return(
    <section>
      <div id="servicesPageServices" className="flex flex-col px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-orange-500 dark:from-orange-800 to-transparent opacity-100 dark:opacity-100"
        ></div>
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-orange-500 dark:bg-orange-800"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t from-orange-500 dark:from-orange-800 to-transparent opacity-100 dark:opacity-100"
        ></div>
        <div className="absolute bottom-0 left-0 h-56 z-0 w-full bg-orange-500 dark:bg-orange-800"
        ></div>
        {/* Decorative Divs ^ */}

        <div className="flex flex-col gap-4 z-10">
          <span className="text-4xl text-left text-gray-100 font-bold lg:text-5xl">What we Do</span>
          <p className="my-4 text-justify text-base text-gray-100 lg:text-lg lg:w-1/2">Take a look at our wide range of services we offer. All our services are mobile, meaning by your request we come to you and fix your car problems.</p>
        </div>
        
        {/* List of Services */}
        <ul className='services-ul'>
          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={oilContIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Oil Change & Fluid Check</h4>
              <p className='services-li-text'>Always keep your engine and other parts well lubricated. Let us do the dirty work, hassle free.</p>

              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={oilIcon} alt="" />
                  <p className='sc-li-txt'>Stay comfortable in all seasons</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={engineIcon} alt="" />
                  <p className='sc-li-txt'>A/C system diagnostics</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={wrenchIcon} alt="" />
                  <p className='sc-li-txt'>Efficient cooling & air circulation</p>
                </li>
              </ul>
            </div>
          </li>

          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={brakeDiscIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Brake Repair and Inspection</h4>
              <p className='services-li-text'>Safety first. Get your brake system diagnosed and needed repairs made.</p>

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
            </div>
          </li>

          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={engineIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Engine Diagnostics and Tune-Up</h4>
              <p className='services-li-text'>Keep your engine in good health with our expert services.</p>

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
            </div>
          </li>

          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={acIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Air Conditioning Service & Repair</h4>
              <p className='services-li-text'>Our experts will make sure your rides are always comfortable.</p>

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
            </div>
          </li>

          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={tyreIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Tire Rotation & Balancing</h4>
              <p className='services-li-text'>Ensure a smooth and safe ride by keeping your tires in check.</p>

              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={treadIcon} alt="" />
                  <p className='sc-li-txt'>Extend tire lifespan and even tread wear</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={balanceIcon} alt="" />
                  <p className='sc-li-txt'>Precision wheel balancing for a smooth ride</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={pressureIcon} alt="" />
                  <p className='sc-li-txt'>Tire pressure check and adjustment</p>
                </li>
              </ul>
            </div>
          </li>

          <li className='services-li'>
            <div className='service-card-info-wrapper'>
              <img src={carBatIcon} alt="car" className='services-li-icon' />
              <h4 className='services-li-heading'>Battery Replacement & Testing</h4>
              <p className='services-li-text'>Ensure a smooth and safe ride by keeping your tires in check.</p>

              <ul className='flex flex-col gap-4 self-start'>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={batCheckIcon} alt="" />
                  <p className='sc-li-txt'>Comprehensive battery health assessments</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={batSwIcon} alt="" />
                  <p className='sc-li-txt'>Professional battery replacement service</p>
                </li>
                <li className='service-card-list-item'>
                  <img className='sc-li-icon' src={powerIcon} alt="" />
                  <p className='sc-li-txt'>Reliable starts and electrical system performance</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ServicesPageServices;
