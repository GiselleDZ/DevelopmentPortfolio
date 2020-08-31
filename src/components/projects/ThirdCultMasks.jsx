import React, { Component } from "react"

export default class ThirdCultMasks extends Component {
    constructor(){   
        super() 
        this.state= {
            mainPhoto: "http://www.gisellezatonyl.com/images/dev/thirdcult/homepage.JPG",
            alt: "Third Cult Homepage",
            thumb: "slideshow__thumb"
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()
        let imageSrc = e.target.src
        let mainSrc = imageSrc.slice(0, (imageSrc.length - 10)).concat(".JPG")

        this.setState({
            mainPhoto: mainSrc,
            alt: e.target.alt,
        })
    }

    render(){
        return(
            <section className="projects__ThirdCultMasks projects__section" id="thirdcultmasks">
                <div className="row">
                    <div className="projects__header">
                        <h1 className="heading-primary heading-primary--main heading-primary--shadow"> Third Cult Masks </h1>
                    </div>
                    <div className="col-1of3">
                        <div className="projects__description">
                            <p className="paragraph paragraph--light paragraph--big">
                                Third Cult Masks is a site made to singularly advertize Third Cult's high end masks to retailers that may want to purchase them as wholesale.
                            </p>
                            <p className="paragraph paragraph--light paragraph--big">
                                ThirdCultMasks was built using primarily vanilla Javascript, CSS3 SASS and Express. It was created by Giselle Zatonyl.
                            </p>
                            <p className="paragraph paragraph--light paragraph--big">
                                Visit on a desktop browser, and you will notice a large percentage of the elements are animated. This project created largely to practice animating CSS3, SASS and minimal Javascript.
                            </p>
                            <a href="https://thirdcult-masks.herokuapp.com/" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn--white btn--white--small u-margin-top-small">
                                Project Site
                            </a>
                            <a href="https://github.com/GiselleDZ/ThirdCvltMasks" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn--white btn--white--small u-margin-top-small u-margin-bottom-small">
                                Github Repository
                            </a>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow">
                            <div className="slideshow__main">
                                <div className="slideshow__image-wrap">
                                    <img src={this.state.mainPhoto} alt={this.state.alt} className="slideshow__img-big"/>
                                </div>
                            </div>
                            <div className="slideshow__line"></div>
                            <div className="slideshow__thumbs">
                                <div className="row">
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)} 
                                                src="http://www.gisellezatonyl.com/images/dev/thirdcult/homepage-thumb.jpg"  
                                                alt="Third Cult masks site homepage" 
                                                className={this.state.thumb}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">    
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="http://www.gisellezatonyl.com/images/dev/thirdcult/details-thumb.jpg" 
                                                alt="Third Cult masks details section" 
                                                className={this.state.thumb}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="http://www.gisellezatonyl.com/images/dev/thirdcult/features-thumb.jpg" 
                                                alt="Third Cult feature cards section" 
                                                className={this.state.thumb}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="http://www.gisellezatonyl.com/images/dev/thirdcult/masks-thumb.jpg" 
                                                alt="Third Cult Masks section depicting three masks" 
                                                className={this.state.thumb}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="http://www.gisellezatonyl.com/images/dev/thirdcult/reviews-thumb.jpg" 
                                                alt="Third Cult Mask Reviews section" 
                                                className={this.state.thumb}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="projects__description projects__description--15">
                        <div className="projects__tech-logos">
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">

                                <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="projects__tech-logos__wrapper  projects__tech-logos__wrapper--logo-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--55">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                My role
                            </h3>
                            <ul className="list">
                                <li className="list__item">
                                    Designed relational database schema.
                                </li>
                                <li className="list__item">
                                    Designed API calls for adding, deleting, and updating products, using Axios on the front end.
                                </li>
                                <li className="list__item">
                                    Managed products state on the front end, using Redux, and Secure Local Storage.
                                </li>
                                <li className="list__item">
                                    Constructed server responses and error handling on the back end, using Express and Sequelize.
                                </li>
                                <li className="list__item">
                                    Built the mulptiple product pages, including the home page.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1of2">
                        <div className="projects__description projects__description--55">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Challenges
                            </h3>
                            <ul className="list">
                                <li className="list__item">
                                    Our biggest challenge laid in a planning oversight. With only one week to build our e-commerce site, we overlooked the need for the integration of a user who does not have an account or is not logged in. Ultimately, we resolved it by integrating local storage.
                                </li>
                                <li className="list__item">
                                    As our first group project during our training at the Grace Hopper program, our biggest challenge was learning to 
                                    to work together and manage the project. We used Github projects, and slowly picked up a good rhythm for assigning 
                                    tasks, and keeping track of work in progress. We reminded each other to update the board more frequenmtly, and 
                                    established a disipline for recording tasks directly on the task board. 
                                    By the end of the week, we had mastered our management system, and were ready for another.
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div> */}
            </section>
            
        )
    }
}