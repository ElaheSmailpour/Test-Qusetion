
import React from "react"
import Test from './Test'

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {


  return (

    <BrowserRouter>
      <Switch>
        <Route path={"/Test"} component={Test}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

