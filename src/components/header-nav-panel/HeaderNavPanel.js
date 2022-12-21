import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const HeaderNavPanel = ({ name, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavDropdown
      role="button"
      class="nav-link"
      data-toggle="collapse"
      title={name}
      id="nav-dropdown"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      show={isHovered}
      style={{
        transition: "all 0.3s",
      }}
      translate="yes"
    >
      {children}
    </NavDropdown>
  );
};

export default React.memo(HeaderNavPanel);
