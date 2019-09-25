import React from "react";
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink";

const CustomAniLink = ({
  children,
  to
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <AniLink paintDrip={true} hex="#fff" to={to} duration={0.5}>
    {children}
  </AniLink>
);

export default CustomAniLink;
