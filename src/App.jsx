import React, { Component } from "react";
import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import MyDashboard from "./views/MyDashboard"
import MyNavBar from "./components/navDropDownMenu/MyNavBar";
import MySeedList from "./views/MySeedList";
import AddSeeds from "./views/AddSeeds";
import About from "./views/About";
import "./styles/MyNavBar.css";
import "./styles/BtnMySeedList.css";
import "./styles/About.css";
// import "./styles/MyDashboard.css"
// import RandomBeer from "./components/RandomBeer"
// import NewBeer from "./components/NewBeer"
// need to import css for AllBeers here:
// import "./styles/AllBeers.css"
// import "./styles/NewBeer.css"
// import "./styles/RandomBeer.css"
// import "./styles/NewBeer.css"

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
        <Route exact path="/" 
           // component={AllBeers}
         />
        
        <Route path="/about" component={About} />


        <Route path="/mydashboard" component= {MyDashboard} />
        <Route path="/mydashboard/:id" component= {MyDashboard} />
       
        <Route path="/myseedlist" component= {MySeedList} />
        <Route path="/myseedlist/:id" component= {MySeedList} />

        {/* <Route path="/mywishlist" component= {MyWishList} />
        <Route path="/mywishlist/:id" component= {MyWishList} /> */}

        <Route path="/addseeds" component= {AddSeeds} />
        {/* <Route path="/addseeds/:id" component= {MyWishList} /> */}


        {/* <Route path="/myprofile" component= {MyProfile} />
        <Route path="/myprofile/:id" component= {MyProfile} /> */}
        
        {/* <Route exact path="/beers" render={props => (<AllBeers {...props} allBeers={this.state.allBeers} />
        )} */}
        
  
        {/* for any other route (ex: /algkjafjdf) (*):   */}
        {/* <Route path="*" component={NotFound} /> */}


      </Switch>
      </div>
    );
  }
}

export default App;
