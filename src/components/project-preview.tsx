/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";
import { IProjectObject } from "../types";
import CustomAniLink from "./commons/custom-anilink";

const ProjectPreview = ({
  slug,
  title,
  description,
  imageData
}: IProjectObject) => (
  <div css={projectPreviewStyles}>
    <div css={innerContainerStyles}>
      <div css={imageContainerStyles}>
        <CustomAniLink to={`/${slug}/`}>
          <Img fluid={imageData} alt={title} />
        </CustomAniLink>
      </div>
      <div css={titleOverlayStyles}>
        <h5>
          <CustomAniLink to={`/${slug}/`}>{title}</CustomAniLink>
        </h5>
        <p>
          {description} <br />
          <CustomAniLink to={`/${slug}/`}>Read more &rarr;</CustomAniLink>
        </p>
      </div>
    </div>
  </div>
);

const titleOverlayStyles = css({
  padding: "0 20px",
  paddingTop: "20px"
});

const innerContainerStyles = css({
  padding: "0 16px",
  paddingBottom: "16px"
});

const imageContainerStyles = css({
  border: "5px solid rgba(255,255,255,.1)",
  borderRadius: "10px",
  boxShadow: "0 0 10px 0 #1b1b1b",
  position: "relative"
});

const projectPreviewStyles = css`
  cursor: pointer;
  & img {
    transition: all 0.4s ease !important;
    opacity: 0.7;
    filter: grayscale(100%);
  }
  &:hover img {
    transform: scale(0.95) !important;
    opacity: 0.5;
    filter: grayscale(0%);
  }
  & h5 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 0;
    & a {
      color: #333;
      text-decoration: none;
    }
  }
  & p {
    font-size: 0.7rem;
  }
`;

export default ProjectPreview;
