import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function DynamicSeo({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const pageTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="google-site-verification" content="7zSn6P8ELtOk-QRHdMJA_9MB8cpVF_i8GasElsem4bQ" />
    </>
  );
}
export default DynamicSeo;
