import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/porfolio";
import Contact from "./components/pages/Contact";
import Technologies from "./components/pages/Technologies";
// import background from "./assets/black background.jpg"

function App() {
  return (
    
    <Router>
      <Switch>
      <div>
        <NavTabs />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Technologies" component={Technologies} />
      </div>
      </Switch>
    </Router>
    
  );
}

export default App;
