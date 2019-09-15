/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { ISEOObject } from "../types";

function SEO({ description = ``, lang = `en`, meta = [], title }: ISEOObject) {
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

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: `description`
        },
        {
          content: title,
          property: `og:title`
        },
        {
          content: metaDescription,
          property: `og:description`
        },
        {
          content: `website`,
          property: `og:type`
        },
        {
          content: `summary`,
          name: `twitter:card`
        },
        {
          content: site.siteMetadata.author,
          name: `twitter:creator`
        },
        {
          content: title,
          name: `twitter:title`
        },
        {
          content: metaDescription,
          name: `twitter:description`
        }
      ].concat(meta)}
    />
  );
}

export default SEO;
