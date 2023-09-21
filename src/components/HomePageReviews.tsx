import React from 'react';
import quoteIcon from '../../icons/quote-left-svgrepo-com.svg';

function HomePageReviews() {
  return(
    <section>
      <div id="homePageReviews" className="relative flex flex-col px-6 py-8 gap-10 bg-gray-100 dark:bg-gray-900 md:px-10 md:py-16 bg-repeat bg-center">
        {/* Decorative Divs */}
        {/* Top */}
        <div className="opacity-40 absolute top-0 left-0 h-64 z-0 w-full bg-gradient-to-b from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        {/* Bottom */}
        <div className="opacity-40 absolute bottom-0 left-0 h-64 z-0 w-full bg-gradient-to-t from-sky-500 dark:from-pink-950 to-transparent"
        ></div>
        {/* Decorative Divs ^ */}
        
        <div className="flex flex-col gap-4 z-10">
          <span className="uppercase text-start text-sm text-gray-900 dark:text-gray-100 font-bold lg:text-base">Reviews</span>
          <h2 className="text-4xl text-left text-gray-900 dark:text-gray-100 font-bold lg:text-5xl">What Our Customers Think</h2>
          <p className="text-base text-justify text-gray-900 dark:text-gray-100 lg:text-lg">
            Below are some of the reviews from our customers. Check them out and see what the people we have worked with have to say about our services.
          </p>
        </div>
        <ul className="flex flex-col gap-8 items-center md:flex-row md:flex-wrap md:justify-around md:items-stretch z-10">
          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Excellent communication</h3>
            <p className="service-card-text">
              Had a superb experience with the folks at ITBuddy. They value communication and were available 24/7, they are very professional. I highly reccomend their services!
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Steven</span>
              <span className="service-card-person-title">Project Manager</span>
            </div>
          </li>
          
          <li className="review-card">
            <img src={quoteIcon} alt="quote icon" aria-hidden="true" loading="lazy" decoding="async" 
            className="dark:invert w-20 h-auto self-end" />
            <h3 className="review-card-title">Very fast and efficient</h3>
            <p className="service-card-text">
              Hired ITBuddies for a project that was due in a few days. Had the job done the next day, which I never expected. They had the project done very quickly, and with high quality as well. Highly recommend.
            </p>

            <div className="service-card-person">
              <span className="service-card-person-name">Alison</span>
              <span className="service-card-person-title">Startup Owner</span>
            </div>
          </li>

        </ul>

        <a href="#/reviews" 
        className="button-primary self-start lg:self-center z-10">
          Read more reviews</a>
      </div>
    </section>
  )
}

export default HomePageReviews;
