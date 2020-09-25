import * as React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.scss";

type LayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

function Layout(props: LayoutProps) {
  return (
    <div className={`layout ${props.className}`}>
      <Header></Header>
      <div className={`contents`}>{props.children}</div>
      <Footer></Footer>
    </div>
  );
}

Layout.defaultProps = {
  className: "",
};

export default React.memo(Layout);
