import React, { Component } from "react"

export default class Header extends Component {
    render(){
        return(
            <header className="header" id="HiHello">
                <div className="header__shadow-wrapper"> 
                    <span className="header__shadow-wrapper--dot-shadow"></span>
                    <div className="header__text-box">
                        <figure className="header__shape">
                            <img src="../../public/assets/imgs/blue-G-300.jpg" alt="blue Giselle" className="header__img" />
                        </figure>
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">
                                Giselle Zatonyl
                            </span>
                            <span className="heading-primary--sub u-margin-left-small">
                                Fullstack Software Engineer
                            </span>
                        </h1>
                    </div>
                    <div className="header__button">
                        <a href="#intro" className="btn btn--black-button btn--animated">
                            Hi, Nice to meet you 🡓 
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}