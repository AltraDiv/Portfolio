import React from 'react';
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

const Intro: React.FC = () => {
    return (
      <>
        <section className="bg-white antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <img
                src={ProfilePicture}
                alt="Divjot Bhogal"
                className="w-45 h-45 mx-auto rounded-full mb-4"
              />
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Divjot Bhogal
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl">
                Student at the University of Waterloo for Computational Mathematics
              </p>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12 mt-12 sm:mt-16 justify-center mx-auto lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold leading-tight text-gray-900">
                  LinkedIn
                </h3>
                <p className="text-lg font-normal text-gray-500">
                  Check out my LinkedIn profile for work experience and updates!
                </p>
                <a href="https://www.linkedin.com/in/divjot-bhogal" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
                   aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-8 18H8v-8h3v8zm-1.5-9.1c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zM20 18h-3v-4c0-1.1-1-2-2-2s-2 .9-2 2v4h-3v-8h3v1.3c.6-.8 1.6-1.3 2.5-1.3 1.9 0 3.5 1.6 3.5 3.5v4.5z"/>
                  </svg>
                </a>
              </div>
  
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold leading-tight text-gray-900">
                  GitHub
                </h3>
                <p className="text-lg font-normal text-gray-500">
                  Check out my GitHub profile for projects and contributions!
                </p>
                <a href="https://github.com/altraDiv" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
                   aria-label="GitHub">
                  <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.3 1.1 2.8.8.1-.6.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.5 1.2-3.4-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2.2-.5 3.3-.5 1.1 0 2.3.2 3.3.5 2.4-1.6 3.4-1.3 3.4-1.3.6 1.8.2 3.2.1 3.5.8.9 1.2 2.1 1.2 3.4 0 4.5-2.7 5.4-5.3 5.7.4.3.8.9.8 1.8v2.7c0 .3.3.6.8.5C20.6 22 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Intro;
