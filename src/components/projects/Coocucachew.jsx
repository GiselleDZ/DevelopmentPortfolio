import React, { Component } from "react"

export default class Coocucachew extends Component {
    constructor(){   
        super() 
        this.state= {
            mainPhoto: "http://www.gisellezatonyl.com/images/dev/coocucachew/gif1.gif"
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()

        this.setState({
            mainPhoto: e.target.src
        })
    }

    render(){
        return(
            <section className="projects__coocucachew  projects__section" id="coocucachew">
                <div className="row">
                    <div className="projects__header projects__header--titles">
                        <h1 className="heading-primary heading-primary--main heading-primary--shadow"> Coocucachew </h1>
                    </div>
                    <div className="col-1of3">
                        <div className="projects__description projects__description--60">
                            <p className="paragraph paragraph--light paragraph--big">
                                Coocucachew is an e-commere site selling cookies, cupcakes, cake pops and chocolate. Coocucachew features many types of these products, which a user may browse, add to cart and check out using Stripe.
                            </p>
                            <p className="paragraph paragraph--light paragraph--big">
                                Coocucachew was built using React, Redux, Express, PostgreSQL, and Sequelize. The team that created Coocucachew is: Adrianna Winkelman, Gisele (Yunshu) Xiao, Michelle Broomes, Giselle Zatonyl.
                            </p>
                            <div className="projects__description--buttons">
                                <a href="https://coocucachewstreet.herokuapp.com/" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small-medium">
                                    Project Site
                                </a>
                                <a href="https://github.com/Coocucachew/coocucachew" 
                                    rel="noopener noreferrer"
                                    target="_blank"

                                    className="btn btn--white u-margin-top-small-medium">
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow">
                            <div className="slideshow__main">
                                <img src={this.state.mainPhoto} alt="img" className="slideshow__img-big"/>
                            </div>
                            <div className="slideshow__line"></div>
                            <div className="slideshow__thumbs">
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)} 
                                        src="http://www.gisellezatonyl.com/images/dev/coocucachew/gif1.gif"  
                                        alt="Site walk-through part 1" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                                <div className="slideshow__thumb-wrap">    
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="http://www.gisellezatonyl.com/images/dev/coocucachew/gif2.gif" 
                                        alt="Site walk-through part 2" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="http://www.gisellezatonyl.com/images/dev/coocucachew/gif3.gif" 
                                        alt="Site walk-through part 3" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="http://www.gisellezatonyl.com/images/dev/coocucachew/gif4.gif" 
                                        alt="Site walk-through part 4" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="http://www.gisellezatonyl.com/images/dev/coocucachew/main.png" 
                                        alt="Coocucachew Landing" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="projects__description projects__description--15">
                        <div className="projects__tech-logos">
                            <div className="projects__tech-logos__wrapper">
                                 <img src="../../public/assets/greyscale-logos/node.png" 
                                 alt="node logo" 
                                 className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/> 
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/html5.png" 
                                alt="html5 logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/react.png" 
                                alt="react logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/css3.png" 
                                alt="css3 logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/redux.png" 
                                alt="redux logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/Expressjs.png" 
                                alt="Expressjs logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/postgresql.png" 
                                alt="postgresql logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/sequelize.png" 
                                alt="sequelize logo" 
                                className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--40">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                My role
                            </h3>
                            <ul className="list u-margin-bottom-medium">
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
                        <div className="projects__description projects__description--40">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Challenges
                            </h3>
                            <ul className="list u-margin-bottom-medium">
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
                </div>
            </section>
            
        )
    }
}