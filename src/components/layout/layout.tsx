import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import PageCover from "./page-cover";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageCover />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
