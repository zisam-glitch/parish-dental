import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";
import HomeBanner from "../../home/HomeBanner";
import ToothExtractionBody from "./ToothExtractionBody"
import ToothExtractionHeader from "./ToothExtractionHeader";
const ClearAligners = () => {
  return (
    <>
      <ToothExtractionHeader/>
      <ToothExtractionBody/>
      <Faq />
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ContactInfo />
    </>
  );
};

export default ClearAligners;
