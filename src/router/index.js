import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from '../components/Layout';

const Dashboard = lazy(() => import("../pages/Dashboard"));

const Navigation = () => (
  <Router>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Suspense>
    </Layout>
  </Router>
);

export default Navigation;
