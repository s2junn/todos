import * as React from "react";

import "./Footer.scss";

type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

function Footer(props: FooterProps) {
  return (
    <div className={`app-footer ${props.className}`}>
      <p>copyright (c) 2020 s2junn. all rights reserved.</p>
    </div>
  );
}

Footer.defaultProps = {
  className: "",
};

export default React.memo(Footer);
