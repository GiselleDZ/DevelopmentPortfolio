import React, { Component } from "react"
import ContactPop from "./ContactPop"

export default class Footer extends Component {
    constructor(){
        super()
    }

    
    render(){
        return(
            <section id="footer">
                <footer className="footer">
                    <div className="footer__logo-box">
                        <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599207984/Giselle-Zatonyl-Logo-Mark-white-sm-01_absjmr.png" alt="full logo" className="footer__logo"></img>
                    </div>
                    <div className="row">
                        <div className="footer__line-nav"></div>
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="https://linkedin.com/in/gisellezatonyl" 
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link">
                                        linkedin
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://github.com/GiselleDZ" 
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link">
                                        github
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://drive.google.com/file/d/13KboxwJRf0cAr4p6s3hsa9LOJ9ymV5w9/view?usp=sharing" 
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link">
                                        resume pdf
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#contactpopup"
                                        className="footer__link" 
                                        >
                                        e-mail
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="http://gisellezatonyl.com" 
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link"
                                        >
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
            </section>
        )
    }
}