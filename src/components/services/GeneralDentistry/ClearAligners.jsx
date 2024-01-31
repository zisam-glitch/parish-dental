import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";
import HomeBanner from "../../home/HomeBanner";

const ClearAligners = () => {
  return (
    <>
      <ClearAlignersBaner />
      <ClrarContent />

      <Faq />
      <section className="container mx-auto px-10 py-12">
        <div className="tab1 py-6">
          <h1 className="blue text-3xl	py-4">Conclusion</h1>
          <p>
            General Dentistry is an integral part of maintaining your overall
            health. With a focus on preventative care, diagnosis, and treatment,
            it serves as your first line of defense against oral health issues.
          </p>
        </div>
      </section>
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ContactInfo />

     
    </>
  );
};

export default ClearAligners;
