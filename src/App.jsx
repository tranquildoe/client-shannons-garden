import React, { Component } from "react";
import "./App.css";
import UserContext from "./auth/UserContext";
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

import "./styles/Form.scss";
import "./styles/MyNavBar.css";
import "./styles/BtnMySeedList.css";
import "./styles/About.css";

class App extends Component {
  render() {
    return (
      <UserContext>
        <div className="App">
          {/* <div>hi</div> */}
          <MyNavBar />
          {/* <img className="picture" src="./images/bottleCaps.jpg" alt="beer bottlecaps"/> */}

          <Switch>
            {/* only want "exact" for home page since can have aboutsomethingelse and won't want exact there */}
            {/* link to paths in NavMain.jsx:  */}
            <Route exact path="/" component={StartPage} />

            <Route path="/about" component={About} />

            <ProtectedRoute exact path="/mydashboard" component={MyDashboard} />
            <ProtectedRoute exact path="/mydashboard" component={MyDashboard} />
            <ProtectedRoute exact path="/myseedlist" component={MySeedList} />

            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />


          </Switch>
        </div>
      </UserContext>
    );
  }
}

export default App;
