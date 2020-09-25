import * as React from "react";

import "./Header.scss";

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

function Header(props: HeaderProps) {
  return (
    <header className={`app-header ${props.className}`}>
      <h1>To Do List</h1>
    </header>
  );
}

Header.defaultProps = {
  className: "",
};

export default React.memo(Header);
