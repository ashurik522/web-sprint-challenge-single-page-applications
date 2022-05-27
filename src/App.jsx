import React from "react";
import "./App.css"
import Header from "./components/NavBar";
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home'

const App = () => {
  return (
   <div className="app-container">
     <header>
       <Header />
     </header>
     <main>
       <Switch>
         <Route exact path ="/">
          <HomePage />
         </Route>
       </Switch>
     </main>
   </div>
  );
};
export default App;
