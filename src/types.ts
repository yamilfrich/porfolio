import { FluidObject } from "gatsby-image";

export interface IQueryObject {
  data: {
    projectsJson: IProjectJsonObject;
  };
}

export interface IImageObject {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export interface IProjectJsonObject {
  slug: string;
  title: string;
  description: string;
  url: string;
  image: IImageObject;
}

export interface IProjectObject {
  slug: string;
  title: string;
  description: string;
  url: string;
  imageData: FluidObject;
}

export interface ISEOObject {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}
