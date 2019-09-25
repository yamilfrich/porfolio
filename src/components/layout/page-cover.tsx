/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface IProps {
  backgrounds: string[];
}

interface IState {
  backgrounds: string[];
  currentBackground: number;
}

class PageCover extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      backgrounds: props.backgrounds,
      currentBackground: 0
    };
  }

  changeToNextBg = () => {
    setTimeout(() => {
      const nextBg: number = this.state.currentBackground + 1;
      this.setState({
        currentBackground: nextBg >= this.state.backgrounds.length ? 0 : nextBg
      });

      this.changeToNextBg();
    }, 2000);
  };

  componentDidMount() {
    this.changeToNextBg();
  }

  render() {
    return (
      <div css={pageCoverStyles}>
        <div
          css={pageCoverImgStyles(
            this.state.backgrounds[this.state.currentBackground]
          )}
        />
      </div>
    );
  }
}

const PageCoverWrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { in: ["bg7.png", "bg6.png"] } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
  `);

  const bgs = data.allFile.edges.map(
    edge => edge.node.childImageSharp.fluid.originalImg
  );

  return <PageCover backgrounds={bgs} />;
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
    opacity: 0.2,
    position: "absolute",
    top: 0,
    transition: "background-image 1s ease-in-out",
    width: "100%",
    zIndex: -1
  });

export default PageCoverWrapper;
