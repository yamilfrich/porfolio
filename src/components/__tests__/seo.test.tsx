import React from "react";
import * as Gatsby from "gatsby";
// @ts-ignore
import renderer from "react-test-renderer";
import SEO from "../seo";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: "My Title",
      description: "My description",
      author: "Florian"
    }
  }
}));

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="Default Starter" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
