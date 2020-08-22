import React, { Component } from "react"

export default class VChatBot extends Component {
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

        if (e.target.alt === "VChatBot Demo Video"){
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
            <div className="projects__vchatbot" id="vchatbot">
                <div className="projects__header">
                    <h1 className="heading-primary heading-primary--main heading-primary--shadow"> VChatBot </h1>
                </div>
                <div className="row">
                    <div className="col-1of3">
                        <div className="projects__description projects__description--short">
                            <p className="paragraph paragraph--dark paragraph--big">
                                 Vi Chat Bot is an app developed during NYC Coders for Black Lives Matter Hackathon. The app was created to help the Center for Racial Justice in Education disseminate their learning resources, by engaging their community in conversation, and facilitating access with a chat bot built-in to their website, as well as Facebook Messenger.   
                            </p>
                            <p className="paragraph paragraph--dark paragraph--big">
                                The bot was trained using Google's DialogFlow API, integrated into a PWA React.js application, using BotCopy.
                            </p>
                            <p className="paragraph paragraph--dark paragraph--big">
                                The project was comprised of Developers : Youssouf da Silva, Liang Liang, Vanessa Corlette, Giselle Zatonyl, and Jessica Choi; Project Manager: Marc Luna; Graphic Designer: Rae Shambrook
                            </p>
                            <a href="http://vi-bot.surge.sh/" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn--white u-margin-top-small-medium">
                                Project Site
                            </a>
                            <a href="https://github.com/HackforBLM/v-chat-bot" 
                                rel="noopener noreferrer"
                                target="_blank"

                                className="btn btn--white u-margin-top-small-medium u-margin-bottom-small">
                                Github Repository
                            </a>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow">
                            <div className="slideshow__main">
                                {
                                    this.state.main === "video" ? (
                                        <iframe  src="https://www.youtube.com/embed/UKclBnHiLiE" 
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
                                                src="../../../public/assets/imgs/vchatbot/v-homepage.jpg" 
                                                alt="VChatBot Home" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)} 
                                                src="../../../public/assets/imgs/vchatbot/v-how.jpg"  
                                                alt="VChatBot How" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">    
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/vchatbot/v-why.jpg" 
                                                alt="VChatBot Why" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/VChatBot/v-footer.jpg" 
                                                alt="VChatBot Footer" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1of5">
                                        <div className="slideshow__thumb-wrap">
                                            <img onClick={(e) => this.handleImage(e)}
                                                src="../../../public/assets/imgs/vchatbot/v-video.jpg" 
                                                alt="VChatBot Demo Video" 
                                                className="slideshow__thumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects__description projects__description--xxx-short">
                            <div className="projects__tech-logos u-margin-top-small">
                                <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="projects__logo-img projects_logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="projects__logo-img projects_logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="projects__logo-img projects_logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="projects__logo-img projects_logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="projects__logo-img projects_logo-img--sq"/>
                                <img src="../../public/assets/greyscale-logos/googlecloud.png" alt="googlecloud logo" className="projects__logo-img projects_logo-img--sq"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--xxm-short">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                My role
                            </h3>
                            <ul className="list">
                                <li className="list__item">
                                    Researched the best chat bot technology for our purpose and how to use it. Eventually selected Google DialogFlow from three similar options.
                                </li>
                                <li className="list__item">
                                    Designed conversation pattern to use for different directions the user could take during interactions. 
                                </li>
                                <li className="list__item">
                                    Trained the bot using Google DialogFlow Platform
                                </li>
                                <li className="list__item">
                                    Integrated the bot into our Node.js React environment.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1of2">
                        <div className="projects__description projects__description--xxm-short">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Challenges
                            </h3>
                            <ul className="list">
                                <li className="list__item">
                                    Our biggest challenge was the integration of our bot. Initially, we used DialogFlow's Facebook integration into our stand-alone page. This presented two problems, we were unable to customize the chat box UI, and created a Facebook dependency we thought would
                                    ultimately be problematic. We kept the Facebook integration, and additionally duplicated our conversation training data on a stand alone integration we could use on our Vi site, as well as on the Center for Racial Justice Site.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}