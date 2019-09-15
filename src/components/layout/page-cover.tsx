/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";

const PageCover = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
    }
  `);

  const bgSrc = data.placeholderImage.childImageSharp.fluid.originalImg;

  return (
    <div css={pageCoverStyles}>
      <div css={pageCoverImgStyles(bgSrc)} />
    </div>
  );
};

const pageCoverStyles = css({
  height: "100vh",
  left: 0,
  overflow: "hidden",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: -1
});

const pageCoverImgStyles = (bgSrc: string) =>
  css({
    backgroundAttachment: "fixed",
    backgroundImage: `url(${bgSrc})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -1
  });

export default PageCover;
