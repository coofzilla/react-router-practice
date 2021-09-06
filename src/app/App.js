import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/articles/:title" component={Article} />
        <Route path="/articles/" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/authors/:name" component={Author} />
        <Route path="/categories" component={Categories} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
