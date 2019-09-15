/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout/layout";
import SectionFooter from "../components/layout/section-footer";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="section">
      <div className="text-center">
        <h2 className="home-title">Yamil Friadenrich</h2>
        <p css={homeTextStyles}>
          Welcome to my portfolio. Here you can see some of the projects I
          worked on my career and also know more about me!
        </p>
        <SectionFooter text="projects" linkTo="/projects" />
      </div>
    </div>
  </Layout>
);

const homeTextStyles = css({
  fontSize: "1.5rem",
  lineHeight: "1.6",
  opacity: 0.75,
  textShadow: "0 1px 2px rgba(0,0,0,.2)"
});

export default IndexPage;
