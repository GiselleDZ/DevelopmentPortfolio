import React, { Component } from "react";
import { withRouter, Link as RouterLink } from "react-router";
import ContactPop from "./ContactPop";

export class Navigation extends Component {
  constructor() {
    super();
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    const checkbox = document.getElementById("navi-toggle");

    checkbox.checked = !checkbox.checked;
  }

  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ol className="navigation__list">
            <li className="navigation__items">
              <a
                href="/#HiHello"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link"
              >
                Welcome
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#intro"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link"
              >
                Introduction
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#projects"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link"
              >
                Projects Index
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#thirdcultmasks"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link navigation__link--small"
              >
                Third Cult Masks
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#pentimento"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link navigation__link--small"
              >
                Pentimento
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#vchatbot"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link navigation__link--small"
              >
                Vi Chat Bot
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#coocucachew"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link navigation__link--small"
              >
                Coocucachew
              </a>
            </li>
            <li className="navigation__items">
              <a
                href="/#contactpopup"
                id="nav-contact"
                onClick={(e) => this.toggleNav(e)}
                className="navigation__link navigation__link--small"
              >
                Contact
              </a>
            </li>
            <li className="navigation__items">
              <a className="navigation__link navigation__link--title ">
                P5 Sketches
              </a>
              <ol>
                <li>
                  <a
                    href="/100121"
                    onClick={(e) => this.toggleNav(e)}
                    className="navigation__link navigation__link--extrasmall"
                  >
                    10/01/21 Sketch
                  </a>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);
