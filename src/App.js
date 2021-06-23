
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react"

import Home from './Home'
import Profile from './Profile'
import Add from './Add'
function App() {

  return (
    
    <Router>
      <div className="App">
  <div className="router"></div>

  <main>
          <Switch>

            <Route exact path='/'><Home /></Route>
            <Route path='/profile'><Profile /></Route>
           <Route path="/add"><Add/></Route>
          </Switch>
        </main>
       
      </div>
      
    </Router>
    
 
  );
}

export default App;

