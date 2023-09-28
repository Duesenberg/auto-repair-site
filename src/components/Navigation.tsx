import React from "react";
import sunIcon from '../icons/sun-svgrepo-com.svg';
import moonIcon from '../icons/moon-svgrepo-com.svg';
import logo from '../icons/logo-icon.svg';

const Navigation = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState<boolean | null | string>(true);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  };

  // Check if darkMode is in localStorage, load it from there if so. else,
  // set darkMode as true
  React.useEffect(() => {
    const darkModeCopy = localStorage.getItem('darkMode');
    setDarkMode(darkModeCopy !== null ? JSON.parse(darkModeCopy) : true)
  }, [])
  
  // Hide Nav Links when clicking anywhere else on screen
  const menuRef = React.useRef() as React.RefObject<HTMLElement>;
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if(!menuRef.current?.contains(targetNode)) {
        setMenuVisible(false);
      } 
    }
    document.addEventListener('mousedown', handler);

    return(() => {
      document.removeEventListener('mousedown', handler);
    })
  });

  // Animate toggle dark mode button when clicked
  const animateToggleButton = () => {
    const toggleModeButton = document.querySelector('.toggle-mode-button');

    // Make button invisible when clicked
    toggleModeButton?.classList.add('opacity-0');
    // At the same moment make it visible and add transition so it fades in
    setTimeout(() => {
      toggleModeButton?.classList.add('transition-all');
      toggleModeButton?.classList.add('duration-500');
      toggleModeButton?.classList.remove('opacity-0');
    }, 0);
    // Remove transition effects after
    setTimeout(() => {
      toggleModeButton?.classList.remove('transition-all');
      toggleModeButton?.classList.remove('duration-500');
    }, 500);
  }

  // Toggle aria-expanded attribute of mobile nav button
  const toggleAriaExpanded = () => {
    const mobileNavToggle =  document.querySelector('.mobile-nav-toggle');
    mobileNavToggle?.setAttribute('aria-expanded', 
    mobileNavToggle?.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')
  }

  // Add/remove class of 'dark' on html document depending on darkMode
  React.useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode])
  
  return(
    <header className="sticky top-0 left-0 bg-gray-100 dark:bg-gray-900 z-20">
      <div 
      className="navigation-container flex justify-between items-center px-4 py-4 shadow-md shadow-gray-700 dark:shadow-gray-950 md:px-10 lg:justify-center lg:gap-60 xl:justify-between xl:px-40">
        {/* Nav Logo */}
        <a href='/' aria-label="back to home" className="nav-logo">
          <img src={logo} aria-hidden="true" decoding="async"
          className="w-8 md:w-12 h-auto dark:invert" />
        </a>

        {/* Navigation List & Toggle Dark Mode Wrapper */}
        <div className="flex flex-row-reverse md:flex-row items-center gap-4 md:gap-8">
          {/* Navigation List */}
          <nav role="navigation"
          className="flex relative"
          ref={menuRef}>
            {/* Mobile Nav Toggle */}
            <button aria-label="mobile menu toggle" aria-controls="nav-menu" 
            aria-expanded='false' onClick={() => {
              toggleMenu();
              toggleAriaExpanded();
            }}
            className="mobile-nav-toggle w-8 h-8 md:hidden">
              <div aria-hidden="true"
              className="flex flex-col w-full h-full justify-center items-center gap-1">
                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-black dark:bg-white rounded-md transition-all duration-300 " + (menuVisible ? "rotate-45 translate-y-2" : "")}
                ></span>

                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-black dark:bg-white rounded-md transition-all duration-300 " + (menuVisible ? "opacity-0": "")}
                ></span>

                <span aria-hidden="true" 
                className={"w-3/4 h-1 bg-black dark:bg-white rounded-md transition-all duration-300 " + (menuVisible ? "-rotate-45 -translate-y-2" : "")}
                ></span>
              </div>
            </button>

            {/* Nav Links */}
            <div
            className={'absolute flex items-stretch justify-center w-screen top-12 -right-4  px-10 bg-gray-200 dark:bg-gray-900 z-20 overflow-hidden transition-all duration-500 ease-in-out md:transition-none shadow-md shadow-gray-500 md:static md:h-auto md:w-full md:bg-transparent md:shadow-none ' + (!menuVisible ? "h-0" : "h-60")}>
              <ul className={"z-20 py-4 flex flex-col gap-2 items-stretch justify-around md:flex-row"}>
                <li>
                  <a href="/" id='home-navlink' className='header-nav-link'>Home</a>
                </li>
                <li>
                  <a href="/about" id='about-navlink' className='header-nav-link'>About</a>
                </li>
                <li>
                  <a href="/services" id='services-navlink' className='header-nav-link'>Services</a>
                </li>
                <li>
                  <a href="/reviews" id='reviews-navlink' className='header-nav-link'>Reviews</a>
                </li>
                <li>
                  <a href="/contact" id='contact-navlink' className='header-nav-link'>Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Dark Mode Toggle */}
          <button aria-label="dark mode toggle" onClick={() => {
            toggleDarkMode();
            animateToggleButton();
          }} 
          className='toggle-mode-button'>
            {!darkMode &&
            <img src={moonIcon} alt="moon" aria-hidden='true'
            className="w-8 h-auto dark:invert" />
            }

            {darkMode &&
            <img src={sunIcon} alt="sun" aria-hidden='true'
            className="w-8 h-auto dark:invert" />
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation;
