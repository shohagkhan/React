import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import Test from './pages/Test';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route path="/" exact render={ () => {
                           return <Home name="Shohag" />
                        }} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/posts/:postId" component={Test} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
