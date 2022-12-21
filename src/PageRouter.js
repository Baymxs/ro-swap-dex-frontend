import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Exchange from "./pages/Exchange";
import Farms from "./pages/Farms";
import LaunchPools from "./pages/LaunchPools";
import Liquidity from "./pages/Liquidity";
import Root from "./pages/Root";
import Header from "./components/header/Header";

const PageRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/exchange">
          <Exchange />
        </Route>
        <Route exact path="/liquidity">
          <Liquidity />
        </Route>
        <Route exact path="/farms">
          <Farms />
        </Route>
        <Route exact path="/launch-pools">
          <LaunchPools />
        </Route>
        <Route exact path="/">
          <Root />
        </Route>
      </Switch>
    </Router>
  );
};

export default React.memo(PageRouter);
