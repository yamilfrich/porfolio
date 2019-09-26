/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import p5 from "p5/lib/p5.min";
// import "p5/lib/addons/p5.dom";
import P5Wrapper from "../../components/p5wrapper";
import Layout from "../../components/layout/layout";

const Tateti = () => {
  return (
    <Layout>
      <div className="section text-center">
        <div css={tatetiContainerStyles}>
          <div css={tatetiTextStyles}>
            <h2>Welcome to Ta-Te-Ti</h2>
            <p>Why did I build this game?</p>
            <p>
              Well, why not? It's good to show what can I do with JavaScript.
            </p>
            <p>
              To build this game I used p5.js, it's a great project that
              simplifies the way to create interactive canvas. I love it!
            </p>
            <p>
              Check it out here:{" "}
              <a href="https://p5js.org/" target="_blank">
                https://p5js.org/
              </a>
            </p>
            <p>
              To play the game, just click on each of the cells to add a circle
              or a cross, you'll see whos player is playing on the status bellow
              the board where it says: "Current Player: ..."
            </p>
          </div>
          <div css={tatetiStyles}>
            <h2>Play the game</h2>
            <P5Wrapper />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const tatetiContainerStyles = css`
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;

const tatetiTextStyles = css`
  flex-grow: 1;
  padding: 30px;
  border-right: 1px solid #eaeaea;
  & p {
    margin-bottom: 10px;
  }
`;

const tatetiStyles = css`
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  width: 360px;
  flex-shrink: 0;
  & form > div {
    margin-bottom: 20px;
    small {
      display: block;
      text-align: right;
      margin-top: 5px;
    }
  }
`;

export default Tateti;
