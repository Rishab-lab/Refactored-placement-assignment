import React from "react";


import { Switch, Route } from "react-router-dom";
import Api from "./Component/Api";
import DetailUser from "./Component/DetailUser";
import DeleteUser from "./Component/DeleteUser";

const App = () => {
  return (
    <Switch>
      <Route exact path ="/">
        <Api />
      </Route>
      <Route exact path ="/DeleteUser">
        <DeleteUser />
      </Route>
     
      <Route path="/DetailUser">
        <DetailUser/>
      </Route>

     

     
    </Switch>
  );
};

export default App;
