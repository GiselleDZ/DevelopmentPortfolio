import React, { Component } from "react"

export default class Pentimento extends Component {
    constructor(){   
        super() 
        this.state= {
            main: "video",
            mainPhoto: ""
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()

        if (e.target.alt === "Pentimento Video"){
            this.setState({
                main: "video",
                mainPhoto: ""
            })
        }   else {
            this.setState({
                main: "photo",
                mainPhoto: e.target.src
            })

        }
    }

    render(){
        return(
            <div className="projects__pentimento" id="pentimento">
                <div className="projects__header">
                    <h1 className="heading-primary heading-primary--main"> Pentimento </h1>
                </div>
                <div className="row">
                    <div className="col-1of3">
                        <div className="projects__description">
                            <p className="paragraph paragraph--dark">
                            Pentimento is a mobile-first web application for finding and uploading street art around New York City. It was created for artists, historians, and art enthusiasts to keep track of ephemeral pieces that may be here today but gone tomorrow.
                            Pentimeto was built during the Grace Hopper Software Engineering program, as the Capstone project. The team members were Angie Spears, Giselle Zatonyl, Saj King, and Chelsea Church.
                            </p>
                            <a href="https://pentimentostreet.herokuapp.com/" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn--white u-margin-top-small u-text-center">
                                Project Site
                            </a>
                            <a href="https://github.com/Phantom-Blue/phantom-blue" 
                                rel="noopener noreferrer"
                                target="_blank"

                                className="btn btn--white u-margin-top-medium u-margin-bottom-small u-text-center">
                                Github Repository
                            </a>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow">
                            <div className="slideshow__main">
                                {
                                    this.state.main === "video" ? (
                                        <iframe  src="https://www.youtube.com/embed/ZBzauWZc4Gk" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="slideshow__video-big" />
                                    ) : (
                                        <div className="slideshow__image-wrap">
                                            <img src={this.state.mainPhoto} alt="img" className="slideshow__img-big"/>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="slideshow__line"></div>
                            <div className="slideshow__thumbs">
                                <div className="row">
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/pentimento/video.jpg" 
                                                alt="Pentimento Video" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)} 
                                                src="../../../public/assets/imgs/pentimento/homepage.jpg"  
                                                alt="Pentimento Homepage" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">    
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/pentimento/artgallery.jpg" 
                                                alt="Pentimento Gallery View" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/pentimento/map.jpg" 
                                                alt="Pentimento Map" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/pentimento/mapart.jpg" 
                                                alt="Pentimento Map Pin Artwork" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--short">
                            <h3 className="heading-secondary u-margin-bottom-small">
                                My role
                            </h3>
                            <p className="paragraph paragraph--medium">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ea beatae, deserunt labore aperiam corrupti eum culpa ab? Quas, ea culpa! Quaerat vel debitis quis laborum. Accusamus fuga porro modi.
                            </p>

                        </div>
                    </div>
                    <div className="col-1of2">
                        <div className="projects__description projects__description--short">
                        <h3 className="heading-secondary u-margin-bottom-small">
                                Challenges
                            </h3>
                            <p className="paragraph paragraph--medium">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ea beatae, deserunt labore aperiam corrupti eum culpa ab? Quas, ea culpa! Quaerat vel debitis quis laborum. Accusamus fuga porro modi.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}