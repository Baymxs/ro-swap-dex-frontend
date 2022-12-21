import React from "react";
import { Link } from "react-router-dom";

const PageLink = ({ linkTo, title }) => {
  return (
    <Link to={linkTo}>
      <div style={{ minWidth: "100%" }}>{title}</div>
    </Link>
  );
};

export default React.memo(PageLink);
