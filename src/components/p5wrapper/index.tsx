import React, { Component } from "react";
import p5 from "p5";

import sketch from "./sketch";

class P5Wrapper extends Component<{}, {}> {
  canvas: any = null;

  componentDidMount() {
    const node = document.getElementById("app-p5_container");
    if (node) {
      this.canvas = new p5(sketch, node);
    }
    // this.canvas.setOnReady(this.props.onReady);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.canvas.pushProps(nextProps);
  // }

  shouldComponentUpdate() {
    // just in case :)
    return false;
  }

  componentWillUnmount() {
    this.canvas!.remove();
  }

  render() {
    // console.log("::: P5Wrapper.props:", this.props);
    return (
      <div
        id="app-p5_container"
        style={{ width: "100%", textAlign: "center" }}
      />
    );
  }
}

export default P5Wrapper;
