import React from 'react';
import logo from '../icons/logo-icon.svg';

function Footer() {
  return(
    <footer className='bg-gray-100 dark:bg-gray-800'>
      <div className="p-8 flex flex-col gap-6 bg-gray-100 dark:bg-gray-800 md:flex-row md:justify-center md:gap-20 lg:gap-40 md:px-10 md:py-16">
        {/* Logo Group */}
        <div>
          <a href='#/' aria-label="back to home" className="nav-logo flex justify-center">
            <img src={logo} aria-hidden="true" decoding="async"
            className="w-32 h-auto dark:invert" />
          </a>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1">
          <li className="mb-2">
            <span className="uppercase text-start text-lg text-orange-500 font-bold lg:text-xl">Sitemap</span>
          </li>
          <li>
            <a className="footer-nav-link" href="#/">Home</a>
          </li>
          <li>
            <a className="footer-nav-link" href="#/about">About</a>
          </li>
          <li>
            <a className="footer-nav-link" href="#/services">Services</a>
          </li>
          <li>
            <a className="footer-nav-link" href="#/reviews">Reviews</a>
          </li>
          <li>
            <a className="footer-nav-link" href="#/contact">Contact</a>
          </li>
        </ul>

        {/* Contact Info */}
        <ul className="flex flex-col gap-1">
          <li className="mb-2">
              <span className="uppercase text-start text-lg text-orange-500 font-bold">Contact</span>
          </li>

          <li>
              <a className="footer-nav-link" href="tel: 123-456-7890">(123) 456-7890</a>
          </li>

          <li>
              <a className="footer-nav-link" href="mailto:info@itbuddies.com">info@itbuddies.com</a>
          </li>

          {/* Social Media */}
          <li className="mt-2">
            <div className="flex gap-4">
              <a className="footer-social-icon" aria-label="visit google profile" href="#/">
                <img className="" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg" alt="google" width="20" height="20" />
              </a>

              <a className="footer-social-icon" aria-label="visit facebook profile" href="#/">
                <img className="" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg" alt="facebook" width="20" height="20" />
              </a>

              <a className="footer-social-icon" aria-label="visit instagram profile" href="#/">
                <img className="" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg" alt="instagram"width="20" height="20" />
              </a>
            </div>
          </li>
        </ul>

      </div>
      {/* Copyright */}
      <div className="w-auto border-t border-orange-500 py-4 flex justify-center bg-gray-100 dark:bg-gray-800 mx-8">
        <div>
          <span className="footer-copyright">© Copyright 2023 - </span>
          <a href="#/" className="footer-copyright-link text-center">Mariposa Web Services</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
