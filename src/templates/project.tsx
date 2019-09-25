import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Project from "../components/project";
import { IQueryObject } from "../types";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }: IQueryObject) => {
  const project = data.projectsJson;
  const { title, description, url, slug } = project;

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        url={url}
        slug={slug}
        imageData={project.image.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default ProjectTemplate;
