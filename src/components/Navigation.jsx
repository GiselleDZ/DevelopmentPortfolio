import React, { Component } from "react"

export default class Navigation extends Component {
    render(){
        return(
            <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button"> 
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__items">
                        <a href="#section-about" className="navigation__link"><span>01</span>Placeholder</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#section-features" className="navigation__link"><span>02</span>Placeholder</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#section-masks" className="navigation__link"><span>03</span>Placeholder</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#section-stories" className="navigation__link"><span>04</span>Placeholder</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#section-wholesale" className="navigation__link"><span>05</span>Placeholder</a>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }
}