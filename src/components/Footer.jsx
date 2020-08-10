import React, { Component } from "react"

export default class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src="#" alt="full logo" className="footer__logo"></img>
                </div>
                <div className="row">
                    <div className="footer__line-nav"></div>
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Placeholder
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Placeholder
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Placeholder 
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Placeholder
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Placeholder
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <div className="footer__item"><a href="http://www.gisellezatonyl.com" className="footer__link u-text-small">Built by Giselle Zatonyl</a></div>
                    </div>
                </div>
            </footer>
        )
    }
}