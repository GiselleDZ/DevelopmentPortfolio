import React, { Component } from "react"

export default class Intro extends Component {

    constructor(){   
        super() 
        this.state = {
            card : "front",
            text : "Some of the tech I use",
            flip: false,
            cardClass: "card card--no-flip"
        }
        this.handleFlip = this.handleFlip.bind(this)
    }

    handleFlip(e){
        const aboutMe = "About me"
        const tech = "Some of the tech I use"

        if (this.state.card === "front"){
            this.setState({
                card: "back",
                text: aboutMe,
                flip: true,
                cardClass: "card card--flip"
            })
        } else {
            this.setState({
                card: "front",
                text: tech,
                flip: false,
                cardClass: "card card--no-flip"
            })
        }
    }

    render(){
        return(
            <section className="intro">
                <div className={this.state.cardClass} id="HiHello">
                    <div className="card__side card__side--back">
                        <div className="card__tech-logos">
                            <div className="card__wide-logos">
                                <img src="./public/assets/greyscale-logos/node.png" alt="node logo" className="card__logo-img card__logo-img--wide"/>
                                <img src="./public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="card__logo-img card__logo-img--x-wide"/>
                                <img src="../../public/assets/greyscale-logos/mongodb.png" alt="mongodb logo" className="card__logo-img card__logo-img--wide"/>
                                <img src="../../public/assets/greyscale-logos/sequelize.png" alt="sequelize logo" className="card__logo-img card__logo-img--wide"/>
                            </div>
                            <div className="card__narrow-logos">
                                <img src="../../public/assets/greyscale-logos/postgresql.png" alt="postgresql logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/redux.png" alt="redux logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/github.png" alt="github logo" className="card__logo-img card__logo-img--sq"/>
                            </div>
                            <div className="card__narrow-logos">
                                <img src="../../public/assets/greyscale-logos/threejs.png" alt="threejs logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/tensorflow.png" alt="tensorflow logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/googlecloud.png" alt="google cloud logo" className="card__logo-img card__logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/mapbox.png" alt="mapbox logo" className="card__logo-img card__logo-img--wide"/>
                            </div>
                        </div>
                    </div>
                    <div className="card__side card__side--front">
                        <div className="card__about">
                            <div className="card__text">
                                <h3 className="heading-quaternary--dark u-margin-bottom-smallmedium">
                                    Hi, Hello!
                                </h3>
                                <p className="paragraph--dark">
                                    I'm a Fullstack Software Engineer.
                                </p>
                                <p className="paragraph--dark">
                                    I used to work as a Graphic Designer, but I really love technology, so here I am, spending all my time working with all the tech I love.
                                </p>
                            </div>
                            <div className="card__text">
                                <p className="paragraph--dark u-margin-top-medium">
                                    I'm interested in creating memorable user experiences with engaging functionality, captivating design, state-of-the-art tech, and agile code.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card__button-container">
                        <div className="row">
                            <div className="col-1of2">
                                <button 
                                    onClick={() => this.handleFlip() } 
                                    className="card__button-container--left btn-text btn-text--medium u-margin-bottom-medium">
                                        { this.state.text } &#x219F;
                                </button>
                            </div>
                            <div className="col-1of2">
                                <button href="#projects"
                                className="card__button-container--right btn-text btn-text--medium u-margin-bottom-medium">
                                    View Projects &#x21B4;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}