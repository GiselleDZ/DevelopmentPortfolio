import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navigation, Footer, Loading, ContactPop } from "./components";
import "../public/css/style.css";
import { Resume, Playground } from "./pages";

export default class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }
  componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Navigation />
          <ContactPop />
          {this.state.loaded === true ? (
            <div id="loaded">
              <Switch>
                <Route exact path="/" component={Resume} />
                <Route path="/100121" component={Playground} />
              </Switch>
            </div>
          ) : (
            <Loading />
          )}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
