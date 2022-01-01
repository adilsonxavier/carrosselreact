import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <Router >


            <Header />

            <Container >
            <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/company">
                        <Company />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/newproject">
                        <NewProject />
                    </Route>
             </Switch>

            </Container>
          <Footer/>
        </Router>

    );
}