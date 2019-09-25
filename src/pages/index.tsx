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
          Welcome to my portfolio. On this webapp you'll see the projects I
          worked during my career and also some experiments and fundamental code
          that I decided to include to show you some of what I can do.
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
