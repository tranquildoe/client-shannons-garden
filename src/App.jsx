import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form";

import { Switch, Route } from "react-router-dom";

import StartPage from "./views/StartPage";
import MyDashboard from "./views/MyDashboard";
import SigninPage from "./views/SigninPage";
import SignupPage from "./views/SignupPage";
import MyNavBar from "./components/navDropDownMenu/MyNavBar";
import MySeedList from "./views/MySeedList";
import AddSeedInstPage from "./views/AddSeedInstPage";
import About from "./views/About";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import "./styles/MyNavBar.css";
import "./styles/BtnMySeedList.css";
import "./styles/About.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>hi</div> */}
        <MyNavBar></MyNavBar>
        {/* <img className="picture" src="./images/bottleCaps.jpg" alt="beer bottlecaps"/> */}

        <Switch>
          {/* only want "exact" for home page since can have aboutsomethingelse and won't want exact there */}
          {/* link to paths in NavMain.jsx:  */}
          <Route exact path="/" component={StartPage} />

          <Route path="/about" component={About} />
          
          <Route path="/myseedlist" component={MySeedList} />

          <ProtectedRoute
            exact
            path="/mydashboard"
            component={MyDashboard}
          />

          <Route path="/addseeds" component={AddSeedInstPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />

          <Route path="/form" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
