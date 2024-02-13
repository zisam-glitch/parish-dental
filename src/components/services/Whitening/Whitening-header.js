import React from "react";
const BlogPage = () => {
  return (
    <section>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-8 lg:px-20">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="head-h2 max-w-lg mb-4 tracking-tight sm:text-4xl sm:leading-none">
                Designed by Dentists <br className="hidden md:block" />
                Developed for You
              </h2>
              <p className="text-base text-gray-600 md:text-lg mb-6">
                We offer a carefully curated selection of whitening ranges
                designed to effectively remove stains and discoloration, giving
                you the confidence to flash your pearly whites.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="https://uk.dentalhub.online/v1/view/organization/6119/index.html#/perspectives/3"
                target="_blank"
                className="b-blue inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1696596929/woman-smiling-while-male-dentist-keeping-teeth-color-range_wjzulv.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
