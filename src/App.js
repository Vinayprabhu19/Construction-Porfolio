import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Routes as Switch
} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
    return (
        <Router>
 
                <Switch>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Projects" element={<Projects />} > </Route>
                <Route path="/About" element={<About />} > </Route>
                <Route path="/Contact" element={<Contact />} > </Route>
                </Switch>
      </Router>  
  );
}

export default App;
