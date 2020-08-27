import React, { Component } from "react"

export default class Header extends Component {
    render(){
        return(
            <header className="header" id="HiHello">
                    <div className="header-composition">
                        <div className="header-composition__text-box">
                            <div className="header-composition__background">

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-background--1.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image header-composition__background--background-1"/>

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-background--2.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image header-composition__background--background-2"/>   

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-title-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image header-composition__background--title"/>

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-name-01-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--name"/>

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-1-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-1"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-2-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-2"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-3-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-3"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-4-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-4"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-5-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-5"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-6-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-6"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-7-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-7"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-shape-8-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--shape-8"/>

                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-circle-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--circle"/>
                                <img src="public\assets\imgs\g-dev-site\GZ-Dev-Header-logo-01.svg" 
                                    alt="Abtract Name Composition" 
                                    className="header-composition__background--image  header-composition__background--logo"/>

                            </div>
                        </div>
                    </div>
                    <div className="header__button">
                        {/* <figure class="header__button--shape">
                            <img src="public\assets\imgs\blue-G-300.jpg" 
                                alt="Photo of Giselle in Blue" 
                                class="header__button--img" />
                        </figure> */}
                        <a href="#intro" className="btn btn--black-button">
                            Hi, nice to meet you 🡓 
                        </a>
                    </div>
            </header>
        )
    }
}