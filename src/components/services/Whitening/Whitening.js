import React from "react";
import WhiteningBanner from "./Whitening-header";
import WhiteningCta from "./WhiteningCta";
import Range from "./Range";
import ProductsBanner from "./ProductsBanner";
import Faq from "./Faq";
import Types from "./Types";
import HomeBanner from "../../home/HomeBanner";

const Whitening = () => {
  return (
    <>
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <div className="max-w-screen-xl m-auto">
        <iframe
          className="w-full pb-10 px-10 "
          height="600px"
          src="https://www.youtube.com/embed/MrULCZZ4rSk?si=LQ45emQDLFW4cC3U"
          title="About Parish Dental"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Faq />{" "}
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
};

export default Whitening;
