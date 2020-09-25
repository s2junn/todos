import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../components/layout/Layout";

import Todos from "../pages/todos";

function RootRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Todos} />
          <Redirect path="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RootRouter;
