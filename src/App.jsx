import React, { Component } from "react";
import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./components/NavBar";

import { Switch, Route } from "react-router-dom";

// import AllBeers from "./components/AllBeers"
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
        <div>hi</div>
        {/* <NavBar /> */}
        {/* <img className="picture" src="./images/bottleCaps.jpg" alt="beer bottlecaps"/> */}
       

        <Switch>
      {/* only want "exact" for home page since can have aboutsomethingelse and won't want exact there */}
      {/* link to paths in NavMain.jsx:  */}
        <Route exact path="/" 
        // component={AllBeers}
         />
        
        {/* <Route exact path="/beers" render={props => (<AllBeers {...props} allBeers={this.state.allBeers} />
        )} */}
        {/* <Route path="/home" component= {AllBeers} /> */}
        {/* // component={AllBeers} */}
         {/* />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} /> */}
        {/* for any other route (ex: /algkjafjdf) (*):   */}
        {/* <Route path="*" component={NotFound} /> */}

        {/* <Route
            exact
            path="/beers"
            render={props => (
              <AllBeers {...props} allBeers={this.state.allBeers} />
            )}
          /> */}

      </Switch>
      </div>
    );
  }
}

export default App;
