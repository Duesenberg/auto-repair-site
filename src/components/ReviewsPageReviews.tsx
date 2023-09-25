import React from 'react';
import customerImgOne from '../images/customer-1.jpg';
import customerImgTwo from '../images/customer-2.jpg';
import customerImgThree from '../images/customer-3.jpg';
import customerImgFour from '../images/customer-4.jpg';
import customerImgFive from '../images/customer-5.jpg';
import customerImgSix from '../images/customer-6.jpg';
import customerImgSeven from '../images/customer-7.jpg';
import customerImgEight from '../images/customer-8.jpg';

function ReviewsPageReviews() {
  return(
    <section>
      <div id="ReviewsPageReviews" className="flex flex-col px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 relative md:px-10 md:py-16 xl:px-20 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="absolute top-0 left-0 h-96 z-0 w-full bg-gradient-to-b from-orange-500 dark:from-orange-800 to-transparent"
        ></div>
        <div className="absolute top-0 left-0 h-56 z-0 w-full bg-orange-500 dark:bg-orange-800"
        ></div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 h-96 z-0 w-full bg-gradient-to-t  from-orange-500 dark:from-orange-800 to-transparent"
        ></div>
        <div className="absolute bottom-0 left-0 h-56 z-0 w-full bg-orange-500 dark:bg-orange-800"
        ></div>
        {/* Decorative Divs ^ */}

        <div className="flex flex-col gap-4 z-10">
          <span className="text-4xl text-left text-gray-100 font-bold lg:text-5xl">What People Say About Us</span>
          <p className="my-4 text-justify text-base text-gray-100 lg:text-lg lg:w-1/2">Check out a few reviews from our customers. We always aim to deliver quality services, our customers are our #1 priority.</p>
        </div>
        
        <ul className="flex flex-col p-4 md:p-8 xl:p-10 gap-8 items-center md:flex-row md:flex-wrap md:justify-around md:items-stretch z-10 bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50">
        <li className="review-card">
            <img src={customerImgOne} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Had to service my car so I decided to go to GearHeads for the job. Fast and cheap!"
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Maria</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgTwo} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Started having problems with my brakes out of nowhere. Called up GearHeads, they arrived very fast and got rid of my problem. Highly reccomend them."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Joe</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgThree} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "GearHeads is a game-changer! I had my doubts about mobile car repair, but they exceeded my expectations. The oil change was quick, and the technician was incredibly knowledgeable. Will definitely use them again."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Steven</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgFour} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Brake issues had me worried, but GearHeads came to the rescue. They diagnosed the problem fast and had my brakes fixed in no time. It's comforting to know there's a reliable service like this."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Joana</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgFive} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "My car's engine was acting up, and GearHeads diagnosed it accurately. They not only fixed the issue but also gave me tips to keep my engine healthy. Great service with a personal touch."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Sarah</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgSix} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "Tire rotation and balancing were overdue, and GearHeads made it hassle-free. The technician was thorough, and my car now rides smoothly. GearHeads is now my go-to for car care."
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Melissa</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgSeven} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "My car's battery died on a busy morning, but GearHeads arrived promptly. They tested my battery, replaced it, and I was back on my way. Thanks for saving the day!"
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">Linda</span>
            </div>
          </li>

          <li className="review-card">
            <img src={customerImgEight} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="w-20 h-20 object-cover rounded-full self-center mt-8 mb-4" />
            <p className="service-card-text">
              "I needed a transmission fluid change, and GearHeads made it effortless. The technician was professional, and the service was efficient. My car shifts like new. Highly recommended!"
            </p>

            <div className="service-card-person">
              <span className="service-card-person-title">David</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ReviewsPageReviews;
