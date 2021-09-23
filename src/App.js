import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Technologies from "./components/pages/Technologies";
// import BurgerMenu from "./components/animations/BurgerMenu"
import MaterialNav from "./components/materialnav";
import Footer from "./components/footer"
// import background from "./assets/black background.jpg"

function App() {
  return (
    
    // <Router>
    //   <Switch>
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/Home" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/Technologies" component={Technologies} />
    //   </div>
    //   </Switch>
    // </Router>
    <>

    {/* <Router> */}
      {/* <BurgerMenu/> */}
      <MaterialNav/>
      {/* <Switch>
        <Route  exact path="/"  component ={Home}/>
        <Route  exact path="/Home"  component ={Home}/>
        <Route exact path="/About" component ={About}/>
        <Route exact path="/Contact" component ={Contact}/>
        <Route exact path="/Technologies" component ={Technologies}/>
        <Route exact path="/Portfolio" component ={Portfolio}/>
      </Switch> */}
      {/* <Router> */}
    {/* //   <Switch>
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/Home" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/Technologies" component={Technologies} />
    //   </div>
    //   </Switch>
    // </Router> */}
    {/* <Home/> */}
       {/* </Router>  */}
       <Home/>
       
      
       <br/>
       <Technologies/>
       <br/>
       <Portfolio/>
       <br/>
       {/* <About/> */}
       <Contact/>
       <Footer/>
          </>
    
  );
}

export default App;
