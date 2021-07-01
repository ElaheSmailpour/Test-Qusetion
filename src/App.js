
import React from "react"
import Test from './Test'
import StartTest from "./StartTest"

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Result from "./Result";
function App() {


  return (

    <BrowserRouter>
      <Switch>
        <Route path={"/result"} component={Result}></Route>
        <Route path={"/test"} component={Test}></Route>
        <Route path={"/"} component={StartTest}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

