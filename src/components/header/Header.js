import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import HeaderNavPanel from "../header-nav-panel/HeaderNavPanel";
import PageLink from "../link/PageLink";
import "./Header.css";
import ConnectWallet from "../connect-wallet/ConnectWallet";

const BrandStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand style={BrandStyle}>
        <Logo />
        <div>RoSwap</div>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <TradePanel />
          <EarnPanel />
        </Nav>
      </Navbar.Collapse>
      <ConnectWallet />
    </Navbar>
  );
};

const Logo = () => {
  return (
    <img
      style={{
        marginLeft: "32px",
        marginRight: "9px",
        maxWidth: "50px",
        maxHeight: "50px",
      }}
      src={"logo.png"}
      alt={"logo"}
    />
  );
};

const EarnPanel = () => {
  return (
    <HeaderNavPanel name={"Earn"}>
      <NavDropdown.Item active={false} eventKey="4.1">
        <PageLink linkTo={"/farms"} title={"Farms"} />
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item active={false} eventKey="4.2">
        <PageLink linkTo={"/launch-pools"} title={"Launch pools"} />
      </NavDropdown.Item>
    </HeaderNavPanel>
  );
};

const TradePanel = () => {
  return (
    <HeaderNavPanel name={"Trade"}>
      <NavDropdown.Item active={false} eventKey="4.3">
        <PageLink linkTo={"/exchange"} title={"Exchange"} />
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item active={false} eventKey="4.4">
        <PageLink linkTo={"/liquidity"} title={"Liquidity"} />
      </NavDropdown.Item>
    </HeaderNavPanel>
  );
};

export default React.memo(Header);
