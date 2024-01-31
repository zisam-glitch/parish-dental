import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { StaticImage } from "gatsby-plugin-image";
import QueriesForm from "./global/QueriesForm";
import QuerieForm from "./global/QuerieFrom";

const ContactPageForm = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageContactQuery {
      contentfulPages(title: { eq: "Services" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const contactData = data?.contentfulPages.blocks[3];
  return (
    <>
      <h1 className="f-top hero my-14">Find the right point of contact for you</h1>
      <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center mb-24 mt-10">
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="herocxe">
            <h2>Private Appointments</h2>
            <h3>
              For Private Appointments and Enquiries –{" "}
              <a href="mailto:private@parishdental.co.uk">
                private@parishdental.co.uk
              </a>
            </h3>
            <h2>NHS Appointments </h2>
            <h3>
              For NHS Appointments and Enquiries –{" "}
              <a href="mailto:nhs@parishdental.co.uk">nhs@parishdental.co.uk</a>
            </h3>
            <h2>Parish Dental Leeds Branch</h2>
            <h4>0113 263 8509</h4>
            <ul>
              <li> - option 1 NHS</li>
              <li> - option 2 Private</li>
              <li> - option 3 Private Emergency</li>
            </ul>
            <h2>Private Dentist </h2>
            <h4>0113 322 8354</h4>
            <h3>
              Emergency 247 Dentist –{" "}
              <a href="mailto:private@parishdental.co.uk">
                private@parishdental.co.uk
              </a>
            </h3>
            <h2>Mobile Dentist</h2>
            <h3>
              For Mobile Dentist – UK Coverage –{" "}
              <a href="mailto:hello@parishdental.co.uk">
                hello@parishdental.co.uk
              </a>
            </h3>
            <h2>Accounts Team</h2>
            <h3>
              For Accounts Team –{" "}
              <a href="mailto:accounts@parishdental.co.uk">
                accounts@parishdental.co.uk
              </a>
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10 mt-16 lg:mt-0">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            Contact Us
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {contactData?.subtitle}
          </h2>
          <ReactMarkdown className="text-gray-600 mx-auto my-5 text-base leading-8">
            {contactData?.description?.description}
          </ReactMarkdown>
          <QuerieForm />
        </div>
      </section>
    </>
  );
};

export default ContactPageForm;
