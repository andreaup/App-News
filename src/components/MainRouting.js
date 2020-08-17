import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "./articles";

const MainRouting = () => {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/categories/home" component={Articles} />
          <Route exact path="/categories/politics" component={Articles} />
          <Route path="/categories/international" component={Articles} />
          <Route path="/categories/techdf" render={Articles} />
          <Route path="/categories/shows" render={Articles} />
          <Route path="/categories/sports" render={Articles} />
          <Route path="/categories/design" render={Articles} />
        </Switch>
      </main>
    );
  };
  export default MainRouting;
