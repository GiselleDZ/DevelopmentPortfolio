import React, { Component } from "react"

export default class Footer extends Component {
    constructor(){
        super()
        this.handleContact = this.handleContact.bind(this)
    }

    handleContact(){

    }
    
    render(){
        return(
            <section id="footer">
                <footer className="footer">
                    <div className="footer__logo-box">
                        <img src="http://gisellezatonyl.com/images/dev/logos/G-logomark-w-sm.png" alt="full logo" className="footer__logo"></img>
                    </div>
                    <div className="row">
                        <div className="footer__line-nav"></div>
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="https://linkedin.com/in/gisellezatonyl" className="footer__link">
                                        linkedin
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://github.com/GiselleDZ" className="footer__link">
                                        github
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#contactpopup" className="footer__link">
                                        e-mail
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="http://www.gisellezatonyl.com" className="footer__link">
                                        art portfolio
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__copyright">
                            <div className="footer__item"><a href="http://www.dev.gisellezatonyl.com" className="footer__link u-text-small">Built by Giselle Zatonyl</a></div>
                        </div>
                    </div>
                </footer>
                <section className="popup" id="contactpopup">
                    <div className="popup__content">
                        <img src="public\assets\imgs\misc-bckg.png" alt="3D landscape with engine grid" className="popup__image"/>
                        <a href="#footer" className="popup__close">&times;</a>
                        <div className="popup__text">
                            <h2 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Under construction ¯\_(ツ)_/¯
                            </h2>
                            <h3 className="heading-tertiary heading-tertiary--light">
                                Please e-mail gisellezatonyl@gmail.com
                            </h3>
                        </div>
                    </div>
                </ section>
            </section>
        )
    }
}