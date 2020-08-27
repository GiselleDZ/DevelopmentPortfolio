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
            <section className="intro" id="intro">
                <div className="intro__card-container">
                    <div className={this.state.cardClass}>
                        <div className="card__side card__side--back">
                            <div className="card__tech-logos">
                                <div className="card__logo-row">
                                    <img src="./public/assets/greyscale-logos/node.png" alt="node logo" className="card__logo-img card__logo-img--wide"/>
                                    <img src="./public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="card__logo-img card__logo-img--x-wide"/>
                                    <img src="../../public/assets/greyscale-logos/mongodb.png" alt="mongodb logo" className="card__logo-img card__logo-img--wide"/>
                                    <img src="../../public/assets/greyscale-logos/sequelize.png" alt="sequelize logo" className="card__logo-img card__logo-img--wide"/>
                                </div>
                                <div className="card__logo-row">
                                    <img src="../../public/assets/greyscale-logos/postgresql.png" alt="postgresql logo" className="card__logo-img card__logo-img--sq"/>
                                    <img src="../../public/assets/greyscale-logos/redux.png" alt="redux logo" className="card__logo-img card__logo-img--sq"/>
                                    <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="card__logo-img card__logo-img--sq"/>
                                    <img src="../../public/assets/greyscale-logos/github.png" alt="github logo" className="card__logo-img card__logo-img--sq"/>
                                </div>
                                <div className="card__logo-row">
                                    <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="card__logo-img card__logo-img--sq"/>
                                    <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="card__logo-img card__logo-img--sq"/>
                                    <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="card__logo-img card__logo-img--sq"/>
                                </div>
                                <div className="card__logo-row">
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
                                    <h3 className="heading-quaternary--dark u-margin-bottom-small">
                                        Hi, Hello!
                                    </h3>
                                    <p className="paragraph--dark u-margin-bottom-small">
                                        I'm a Full Stack Software Engineer. I used to work as a Graphic Designer, but Design tech couldn't keep up with my desire to automate, improve systems, and get under the hood. So here I am, spending all my time working with the tech I love. 
                                    </p>
                                    <p className="paragraph--dark u-margin-bottom-small">
                                    I'm interested in creating memorable user experiences with engaging functionality, captivating design, state-of-the-art tech, and agile code. My current aim is to master Javascript, while familiarizing myself with C++ and Python. 
                                    </p>
                                </div>
                                <div className="card__text">
                                    <p className="paragraph--dark u-margin-bottom-small">
                                        As a human, I love hiking in nature, abstract music, advocating for BIPOC and LGBT rights, and all kinds of fitness. I was born in Buenos Aires, Argentina. I'm married to my incredible wife Stella, we have two really cute and spoiled cats. Send me a message!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card__button-container">
                            <div className="row">
                                <div className="col-1of2">
                                    <a
                                        onClick={() => this.handleFlip() } 
                                        className="card__button-container--left btn btn--white u-margin-bottom-medium">
                                            { this.state.text } &#x219F;
                                    </a>
                                </div>
                                <div className="col-1of2">
                                    <a href="#projects"
                                    className="card__button-container--right btn btn--white u-margin-bottom-medium">
                                        View Projects &#x21B4;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro__shape">
                    <img className="intro__shape intro__shape--main" src="http://gisellezatonyl.com/images/dev/shapes/composition-02.svg"></img>
                </div>
            </section>
        )
    }
}