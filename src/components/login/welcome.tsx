/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CustomAniLink from "../commons/custom-anilink";

const LoginWelcome = () => (
  <div css={loginTextStyles}>
    <h2>Welcome to the login</h2>
    If you're wondering why would be a login page be needed for a portfolio, the
    answer is: <br />
    <br />
    <ul>
      <li>
        Authentication flows are essential for most of the applications we build
        nowdays.
      </li>
      <li>Here you can see how this auth process that I developed works.</li>
      <li>
        And also (this apply for this entire app) you can check the code and how
        I coded it.
      </li>
    </ul>
    <p>
      Do you want to read more about? &rarr;{" "}
      <CustomAniLink to="/about/login">About: Login</CustomAniLink>
    </p>
  </div>
);

const loginTextStyles = css`
  flex-grow: 1;
  padding: 30px;
  border-right: 1px solid #eaeaea;
  & ul {
    text-align: left;
  }
`;

export default LoginWelcome;
