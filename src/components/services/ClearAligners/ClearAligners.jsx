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
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ContactInfo />
    </>
  );
};

export default ClearAligners;
