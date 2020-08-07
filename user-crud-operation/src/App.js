import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { UserDataProvider } from "./components/userDataList";
function App() {
  return (
  <UserDataProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
    </UserDataProvider>
  );
}

export default App;
