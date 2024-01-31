import React from "react";
import EmergencyBanner from "./EmergencyBanner";
import EmergencyPricing from "./EmergencyPricing";
import EmergencyServices from "./EmergencyServices";
import EmergencyFaq from "./EmergencyFaq";
import EmergencyCta from "./EmergencyCta";
import EmergencyReviews from "./EmergencyReviews";
import EmergencyAddress from "./EmergencyAddress";
import EmergencyForm from "./EmergencyForm";
import HomeBanner from "../../home/HomeBanner";

function EmergencyDentistry() {
  return (
    <>
      <EmergencyBanner />
      <EmergencyPricing />
      <EmergencyServices />
      <EmergencyFaq />
      <EmergencyCta />
      <EmergencyReviews />
      <EmergencyAddress />
      <EmergencyForm />{" "}
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
}
export default EmergencyDentistry;
