import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      allContentfulGlobal {
        nodes {
          phone
          email

          address
        }
      }
    }
  `);

  const contactData = data?.allContentfulGlobal?.nodes[0];

  return (
    <section className="mt-20 container px-10 mx-auto text-center">
      <h2 className="text-center text-3xl my-2 capitalize font-semibold text-primary">
        Address
      </h2>
      <p className="text-secondary my-2">{contactData?.address}</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3">
        <a className="text-secondary rd brrd my-2" href="tel:08000996375">
        0800 099 6375 - PVT.
        </a>
        <a className="text-secondary rd brrd my-2" href="mailto:private@parishdental.co.uk">
        private@parishdental.co.uk
        </a>
        </div>
        <div className="flex gap-3">
        <a
          className="text-secondary bl bbrd my-2"
          href={`tel:${contactData?.phone}`}
        >
          0113 263 8509 - NHS
        </a>
        <a
          className="text-secondary bl bbrd my-2"
          href="mailto:nhs@parishdental.co.uk"
        >
         nhs@parishdental.co.uk
        </a>
        </div>
      </div>
      <div className="icon-flex">
        <a
          href="https://instagram.com/parish.dental?igshid=MzRlODBiNWFlZA=="
          className="icon"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100094065880755&mibextid=V3Yony"
          className="icon"
        >
          <BsInstagram />
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;
