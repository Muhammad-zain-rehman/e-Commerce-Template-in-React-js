// import "./App.css";
// import ComForm from "./forms/form";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "../src/redux/store";
import { Helmet } from "react-helmet";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Jacket from "./pages/Jacket";
import Socks from "./pages/Socks";
import Gloves from "./pages/Gloves";

function App() {
  const [refresh, setRefresh] = useState(0); //For refrehing the

  return (
    <div>
      <Provider store={store}>       
      {/* <Home/> */}
        
        <Router>
          {/* <NavBar /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jackets" exact component={Jacket} />
            <Route path="/socks" exact component={Socks} />
            <Route path="/gloves" exact component={Gloves} />
            {/* <Route path="/contact" exact component={Table1} /> */}
            {/* <Route path="/contact" exact component={Prectice} /> */}

            {/* <Route path="/contact" exact>
              <Prectice setRefresh={setRefresh} />
            </Route> */}

            {/* <Route path="/contact" exact component={Contact} /> */}
            {/* <Route path="/about" exact component={About} /> */}
            {/* <Route path="/blog" exact component={Blog} /> */}
            {/* <Route path="/blog" exact>
              <Blog refresh={refresh} />
            </Route> */}

            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
