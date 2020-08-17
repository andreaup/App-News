import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "./articles";

const redirectCategories = ({match})=>{
  console.log(match.params.id)
  return <Articles articles={match.params.id} />
}

const MainRouting = () => {
    return (
      <main className="main">
        <Switch>
          <Route path="/categories/:id" render={redirectCategories} />
        </Switch>
      </main>
    );
  };
  export default MainRouting;
