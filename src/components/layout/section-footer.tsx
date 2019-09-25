/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CustomAniLink from "../commons/custom-anilink";

const SectionFooter = ({ text, linkTo }: { text: string; linkTo: string }) => (
  <div css={sectionFooter}>
    <CustomAniLink to={linkTo}>
      <span>{text}</span>
    </CustomAniLink>
  </div>
);

const sectionFooter = css`
  position: absolute;
  bottom: 0;
  top: auto;
  right: auto;
  margin-bottom: 32px;
  left: 50%;
  z-index: 2;
  background: 0 0;
  & a {
    margin-left: 0;
    position: relative;
    display: block;
    font-size: 0.75rem;
    line-height: 1;
    padding: 8px;
    transition: 0.3s;
    color: inherit;
    background: 0 0;
    border: none;
    span {
      position: absolute;
      width: 200px;
      text-align: center;
      left: -100px;
      top: 0;
      text-transform: uppercase;
      letter-spacing: 8px;
    }
    &::before,
    &::after {
      position: absolute;
      content: "";
      right: 0;
      background: 0 0;
      transition: 0.3s;
    }
    &::before {
      bottom: 40px;
      margin-right: 20px;
      height: 32px;
      width: 0;
      border: 2px solid currentColor;
      border-top: none;
      border-right: none;
      color: #000;
      opacity: 0.5;
    }
    &::after {
      bottom: 30px;
      height: 34px;
      width: 18px;
      margin-right: 9px;
    }
    &:hover::before {
      bottom: 24px;
      opacity: 1;
    }
  }
`;

export default SectionFooter;
