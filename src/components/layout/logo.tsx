/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Logo = ({ siteTitle = `` }: { siteTitle?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div css={logoStyles}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt={siteTitle}
      />
    </div>
  );
};

const logoStyles = css({
  width: 200
});

export default Logo;
