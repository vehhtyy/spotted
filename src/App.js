import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Projects, Footer, BackTop } from "./components/frontend";
import { NotFound } from "./components/frontend/components";

function App() {
  return (
    <Router>
      <Navigation />
      <BackTop />
      <Switch>
          <Route path="/" exact component={() => <Projects />} />
          <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
