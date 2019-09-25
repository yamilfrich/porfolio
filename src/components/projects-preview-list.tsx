/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Carousel from "nuka-carousel";
import { IProjectJsonObject } from "../types";
import ProjectPreview from "./project-preview";

interface IEdgeObject {
  node: IProjectJsonObject;
}

const ProjectsPreviewList = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges.slice();

  const splitedProjects = [];
  const size = 3;

  while (projects.length > 0) {
    splitedProjects.push(projects.splice(0, size));
  }

  return (
    <div style={{ height: "320px", width: "100%", margin: "20px 0" }}>
      <Carousel>
        {splitedProjects.map((arr, i) => (
          <div key={i}>
            <div css={projectsPreviewContainerStyles}>
              {arr.map((edge: IEdgeObject, j: number) => {
                const { title, slug, description, url, image } = edge.node;
                return (
                  <ProjectPreview
                    key={j}
                    title={title}
                    slug={slug}
                    description={description}
                    url={url}
                    imageData={image.childImageSharp.fluid}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const projectsPreviewContainerStyles = css({
  "& > div": {
    paddingTop: "8px",
    width: "33.333333%"
  },
  display: "flex",
  justifyContent: "space-between"
});

export default ProjectsPreviewList;
