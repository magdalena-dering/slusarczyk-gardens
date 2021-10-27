import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Contact from "../pages/contact"

const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/o nas" component={About} />
      <Route path="/projekty" component={Projects} />
      <Route path="/kontakt" component={Contact} />
    </Switch>
  </Router>
)

export default AppRouter
