import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const Topbar = () => {
  const data = useStaticQuery(graphql`
    query TopbarQuery {
      allContentfulGlobal {
        nodes {
          phone
          email

          logo {
            url
            title
          }
          address
          workHours
        }
      }
    }
  `);

  const topbarData = data?.allContentfulGlobal.nodes[0];

  return (
    <div className="bg-primary text-white text-sm font-light hidden lg:block">
      <div className="flex justify-between container mx-auto px-2">
        <div className="flex items-center">
          <FiClock className="mr-2" />{" "}
          <span>Monday to Saturday - 9am to 6pm</span>
        </div>
        <div className="flex">
          <a
            href="tel:08000996375"
            className="px-4 redoutline flex items-center"
          >
           
           0800 099 6375 - PVT.
          </a>
          <a
            href="mailto:private@parishdental.co.uk"
            className="px-4 flex items-center"
          >
            <FiMail className="mr-2" />
            private@parishdental.co.uk

          </a>
          <a
            href="tel:001132638509"
            className="px-4 blueoutline flex items-center"
          >
           
            0113 263 8509 - NHS
          </a>
          <a
            href="mailto:nhsparishdental.co.uk"
            className="px-4 flex items-center"
          >
            <FiMail className="mr-2" />
            nhsparishdental.co.uk
          </a>
          <div className="pl-4 flex items-center">
            <FiMapPin className="mr-2" /> {topbarData?.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
