import React, { Component } from "react"

export default class Intro extends Component {
    render(){
        return(
            <section className="intro" id="HiHello">
                <div className="intro__about">
                    <div className="intro__text">
                        <h3 className="heading-quaternary--light u-margin-bottom-smallmedium">
                            Hi, Hello!
                        </h3>
                        <p className="paragraph--light">
                            Yes, I'm a Fullstack Software Engineer. I used to work as a Graphic Designer, but I really love technology, so here I am, spending all my time working with all the tech I love! 
                        </p>
                        <div className="intro__tech-logos">
                            <div className="intro__wide-logos">
                                <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="intro__logo-img"/>
                                <img src="../../public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="intro__logo-img"/>
                                <img src="../../public/assets/greyscale-logos/mongodb.png" alt="mongodb logo" className="intro__logo-img"/>
                                <img src="../../public/assets/greyscale-logos/mapbox.png" alt="mapbox logo" className="intro__logo-img"/>
                                <img src="../../public/assets/greyscale-logos/sequelize.png" alt="sequelize logo" className="intro__logo-img"/>
                            </div>
                            <div className="intro__narrow-logos">
                                <img src="../../public/assets/greyscale-logos/postgresql.png" alt="postgresql logo" className="intro__logo-img intro__logo-img--sq intro__logo-img"/>
                                <img src="../../public/assets/greyscale-logos/redux.png" alt="redux logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/threejs.png" alt="threejs logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/tensorflow.png" alt="tensorflow logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/googlecloud.png" alt="google cloud logo" className="intro__logo-img intro__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/github.png" alt="github logo" className="intro__logo-img intro__logo-img--sq"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}