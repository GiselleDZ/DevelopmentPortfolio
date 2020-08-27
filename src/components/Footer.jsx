import React, { Component } from "react"

export default class Footer extends Component {
    
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
                                        art website
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
                        <div className="popup__left">
                            {/* <img src="./thirdcvlt-imgs/mask1.jpg" alt="white mask on white mask, atop grey whethered wood" className="popup__left--img" />
                            <img src="./thirdcvlt-imgs/mask8.jpg" alt="black on black mask, atop grey whethered wood" className=" popup__left--img" /> */}
                        </div>
                        <div className="popup__right">
                            <a href="#section-masks" className="popup__close">&times;</a>
                            <h2 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Under construction ¯\_(ツ)_/¯
                            </h2>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Please e-mail gz@gisellezatonyl.com
                            </h3>
                            <p className="popup__text u-margin-bottom-medium">
                            </p>
                            {/* <button className="btn btn--white">a good cta</button> */}
                        </div>
                    </div>
                </ section>
            </section>
        )
    }
}