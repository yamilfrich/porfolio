import Img from "gatsby-image";
import React from "react";
import { IProjectObject } from "../types";
import SectionFooter from "./layout/section-footer";
import SEO from "./seo";

const Project = ({ title, description, url, imageData }: IProjectObject) => (
  <React.Fragment>
    <SEO title={title} />
    <div className="section">
      <h1>{title}</h1>
      <p>{description}</p>
      <div style={{ height: "300px", width: "300px", margin: "20px 0" }}>
        <Img fluid={imageData} alt={title} />
      </div>
      <p>
        <a href={url} target="_blank">
          View this project online &rarr;
        </a>
      </p>
    </div>
    <SectionFooter text="&larr; projects" linkTo="/projects" />
  </React.Fragment>
);

export default Project;
