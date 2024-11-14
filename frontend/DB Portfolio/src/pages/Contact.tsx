const Contact: React.FC = () => {
    return (
      <>
        <section className="bg-white dark:bg-gray-900 antialiased min-h-screen">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Contact Me
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                I would love to hear from you! Feel free to reach out for any inquiries or collaborations. Please send a text message or email! 
              </p>
            </div>

            {/* Contact Information Section */}
            <div className="mt-12 sm:mt-16 text-center">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                Email: <a href="mailto:Divjotbhogal@gmail.com" className="text-primary-700 dark:text-primary-400">divjotbhogal@gmail.com</a>
              </p>
              <p className="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                Student Email: <a href="mailto:d5bhogal@uwaterloo.ca" className="text-primary-700 dark:text-primary-400">divjotbhogal@gmail.com</a>
              </p>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                Phone: <a href="tel:+16478619071" className="text-primary-700 dark:text-primary-400">+1-(647)-861-9071</a>
              </p>
            </div>

            {/* Social Media Links Section */}
            <div className="mt-12 sm:mt-16 text-center">
              <h3 className="text-2xl font-bold leading-tight text-white dark:text-white">
                Connect with Me
              </h3>
              <div className="mt-4 space-x-4">
                <a href="https://linkedin.com/in/divjot-bhogal" className="text-white dark:text-primary-400 hover:underline">LinkedIn</a>
                <a href="https://github.com/AltraDiv" className="text-white dark:text-primary-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Contact;
