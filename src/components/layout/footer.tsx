/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div css={footerLeftStyles}>
      <span>
        <FaPhone /> + 66 93 230 4960
      </span>{" "}
      <span>
        <FaEnvelope /> yamiljf@gmail.com
      </span>
    </div>
    <div css={footerRightStyles}>
      © {new Date().getFullYear()}, Built with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

const footerLRStyles = css({
  bottom: "32px",
  fontSize: ".75rem",
  opacity: 0.75,
  position: "fixed",
  zIndex: 10
});

const footerLeftStyles = css(footerLRStyles, {
  left: "64px",
  span: {
    marginRight: "20px"
  },
  "span svg": {
    marginRight: "5px"
  }
});

const footerRightStyles = css(footerLRStyles, {
  right: "64px"
});

export default Footer;
