/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout/layout";
import SectionFooter from "../components/layout/section-footer";
import ProjectsPreviewList from "../components/projects-preview-list";
import SEO from "../components/seo";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="section" css={projectsStyles}>
      <h2>Projects</h2>
      <p>These are some of my career projects.</p>
      <ProjectsPreviewList />
    </div>
    <SectionFooter text="back to home" linkTo="/" />
  </Layout>
);

const projectsStyles = css`
  text-align: center;
  h2 {
    font-size: 3rem;
  }
`;

export default ProjectsPage;
