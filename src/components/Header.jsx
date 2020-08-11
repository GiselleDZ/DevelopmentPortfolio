import React, { Component } from "react"

export default class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="header__logo-box">
                    <img className="header__logo" src="#" alt="Logo" />
                </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">
                        Giselle Zatonyl
                    </span>
                    <span className="heading-primary--sub">
                        Fullstack Software Engineer
                    </span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">Nice to meet you!</a>
            </div>
            <div className="header__shadow-wrapper"> 
                    <span className="header__shadow-wrapper--dot-shadow">
                    </span>
                </div>
        </header>
        )
    }
}