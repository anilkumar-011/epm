"use client";
import React, { useState } from "react";

//-----------------------link formatter--------------------------------
function linkFormatter(s: string){
  return s.replace('&export=download', "");
}

// ------------------------Navbar--------------------------------
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of navbar items
  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about' },
    { text: 'Library', link: '/library' },
    { text: 'Contact', link: '/contact' },
    { text: 'Messages', link: '/message' },
  ];

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-2xl">
              Epaphras Ministries
            </span>
          </div>
          <div className="flex justify-center flex-1 md:justify-around">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 text-white">
                {/* Map over navItems array to render navbar links */}
                {navItems.map((item, index) => (
                  <a key={index} href={item.link} className="hover:text-white px-3 py-2 rounded-md">
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Render mobile menu links dynamically */}
            {navItems.map((item, index) => (
              <a key={index} href={item.link} className="hover:text-white block px-3 py-2 rounded-md text-bas">
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// --------------------------Carousel------------------------

interface CarouselProps {
  images: { id: number; image: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px]">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {images.map((item, index) => (
            <img
              key={item.id}
              src={"https://drive.google.com/uc?id=17_1LowcrqwtxGRp8517WqStSnYmYhwLg"}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 ${
                index === currentIndex ? 'opacity-100' : ''
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 flex justify-center w-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-4 h-4 rounded-full bg-gray-500 hover:bg-gray-700 ${
              index === currentIndex ? 'bg-gray-800' : ''
            }`}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 bg-transparent hover:bg-gray-200 rounded-full p-2"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 bg-transparent hover:bg-gray-200 rounded-full p-2"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};


// ----------------------- Footer --------------------


export const Footer: React.FC = () => {
  return (
    <footer className=" bg-primary p-40 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <p className="text-lg font-bold">Epaphras Ministries</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <nav className="flex space-x-4">
            <a href="#" className="text-base hover:underline">
              About Us
            </a>
            <a href="#" className="text-base hover:underline">
              Ministries
            </a>
            <a href="#" className="text-base hover:underline">
              Sermons
            </a>
            <a href="#" className="text-base hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Epaphras Ministries. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

