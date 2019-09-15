import { Link } from "gatsby";
import React from "react";
import Logo from "./logo";

const Header = ({ siteTitle = `` }: { siteTitle?: string }) => (
  <header>
    <Link to="/">
      <Logo siteTitle={siteTitle} />
    </Link>
  </header>
);

export default Header;
