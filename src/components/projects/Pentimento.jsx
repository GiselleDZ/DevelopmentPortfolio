import React, { Component } from "react"

export default class Pentimento extends Component {
    constructor(){   
        super() 
        this.state= {
            main: "video",
            mainPhoto: "#"
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()

        console.log(e)
     
    }

    render(){
        return(
            <section className="projects" id="pentimento">
                <div className="projects__pentimento">
                    <div className="projects__header">
                        <h1 className="heading-primary heading-primary--main"> Pentimento </h1>
                    </div>
                    <div className="row">
                        <div className="col-1of3">
                            <div className="projects__description u-text-center">
                                <p className="paragraph paragraph--medium u-text-center">
                                Pentimento is a mobile-first web application for finding and uploading street art around New York City. It was created for artists, historians, and art enthusiasts to keep track of ephemeral pieces that may be here today but gone tomorrow.
                                Pentimeto was built during the Grace Hopper Software Engineering program, as the Capstone project. The team members were Angie Spears, Giselle Zatonyl, Saj King, and Chelsea Church.
                                </p>
                                <a href="https://pentimentostreet.herokuapp.com/" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small u-text-center">
                                    Project Webite
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
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                            className="slideshow__video-big" />
                                        ) : (
                                            <div className="slideshow__image-wrap">
                                                <img src={this.state.mainPhoto} alt="img" className="slideshow__img-big"/>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="slideshow__thumbs">
                                    <div className="row">
                                        <div onClick={(e) => this.handleImage(e)} className="col-1of4">
                                            <img onClick={(e) => this.handleImage(e)} 
                                            src="../../../public/assets/imgs/pentimento/homepage.jpg"  
                                            alt="Pentimento Homepage" 
                                            className="slideshow__thumb"/>
                                        </div>
                                        <div className="col-1of4 slideshow__image-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                            src="../../../public/assets/imgs/pentimento/artgallery.jpg" 
                                            alt="Pentimento Gallery View" 
                                            className="slideshow__thumb"/>
                                        </div>
                                        <div className="col-1of4">
                                            <img onClick={(e) => this.handleImage(e)}
                                            src="../../../public/assets/imgs/pentimento/map.jpg" 
                                            alt="Pentimento Map" 
                                            className="slideshow__thumb"/>
                                        </div>
                                        <div className="col-1of4">
                                            <img onClick={(e) => this.handleImage(e)}
                                            src="../../../public/assets/imgs/pentimento/mapart.jpg" 
                                            alt="Pentimento Map Pin Artwork" 
                                            className="slideshow__thumb"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}