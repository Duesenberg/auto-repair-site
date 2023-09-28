import React from 'react';
import customerImgOne from '../images/customer-1.jpg';
import customerImgTwo from '../images/customer-2.jpg';

function HomePageReviews() {
  return(
    <section>
      <div id="homePageReviews" className="relative flex flex-col items-center px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 md:px-10 md:py-16 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-52 z-0 w-full bg-orange-300 dark:bg-orange-800"
        ></div>
        {/* Bottom */}
        <div className="opacity-70 absolute bottom-0 left-0 h-64 z-0 w-full bg-gradient-to-t from-orange-500 dark:from-orange-800 to-transparent"
        ></div>
        {/* Decorative Divs ^ */}
        
        <ul className="flex flex-col p-4 md:p-8 xl:p-10 gap-8 items-center md:flex-row md:flex-wrap md:justify-around md:items-stretch z-10 bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50">
          <li className="review-card">
            <img src={customerImgOne} alt="picture of person" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Had to service my car so I decided to go to GearHeads for the job. Fast and cheap!"
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Maria</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgTwo} alt="picture of person" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Started having problems with my brakes out of nowhere. Called up GearHeads, they arrived very fast and got rid of my problem. Highly reccomend them."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Joe</span>
            </div>
          </li>
        </ul>

        <a href="/reviews" 
        className="button-primary self-start lg:self-center z-10">
          Read more reviews</a>
      </div>
    </section>
  )
}

export default HomePageReviews;
