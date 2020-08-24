import React, { Component } from "react"
import Pentimento from './Pentimento'
import Coocucachew from './Coocucachew'
import VChatBot from './VChatBot'
import ThirdCultMasks from "./ThirdCultMasks"

export default class Projects extends Component {
    render(){
        return(
            <div className="projects" id="projects">
                <div className="projects__intro">
                    <div className="projects__intro-card">
                        <div className="projects__header projects__header--small">
                            <h2 className="heading-primary heading-primary--main heading-primary--shadow ">Projects</h2> 
                        </div>
                        <div className="projects__card-thumbs">
                            <div className="row">
                                <div className="col-1of5">
                                    <a href="#pentimento" className="projects__card-thumbs__thumb-wrapper">
                                        <img src="../../../public/assets/imgs/pentimento/video-thumb.jpg"  alt="Pentimento Demo Video Thumbnail" className="projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-image"/>
                                        <h3 className="heading-tertiary  projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-title">
                                            Pentimento
                                        </h3>
                                    </a>
                                </div>
                                <div className="col-1of5">
                                    <a href="#vchatbot" className="projects__card-thumbs__thumb-wrapper">
                                        <img src="../../../public/assets/imgs/vchatbot/v-homepage-thumb.jpg" alt="Vi Chat Bot Homepage Thumbnail" className="projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-image"/>
                                        <h3 className="heading-tertiary projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-title">
                                            Vi Chat Bot
                                        </h3>
                                    </a>
                                </div>
                                <div className="col-1of5">
                                    <a href="#coocucachew" className="projects__card-thumbs__thumb-wrapper">
                                        <img src="../../../public/assets/imgs/coocucachew/main-thumb.jpg"  alt="Coocucachew Home Page Thumbnail" className="projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-image"/>
                                        <h3 className="heading-tertiary  projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-title">
                                            Coocucachew
                                        </h3>
                                    </a>
                                </div>
                                <div className="col-1of5">
                                    <a href="#HiHello" className="projects__card-thumbs__thumb-wrapper">
                                        <img src="../../../public/assets/imgs/g-dev-site/devsite-homepage-thumb.jpg" alt="Programming Website Homepage Thumbnail" className="projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-image"/>
                                        <h3 className="heading-tertiary  projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-title">
                                        Programming Portfolio
                                        </h3>
                                    </a>
                                </div>
                                <div className="col-1of5">
                                    <a href="#thirdcultmasks" className="projects__card-thumbs__thumb-wrapper">
                                        <img src="../../../public/assets/imgs/thirdcult/homepage-thumb.jpg" alt="" className="projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-image"/>
                                        <h3 className="heading-tertiary projects__card-thumbs__thumb-wrapper projects__card-thumbs__thumb-wrapper--thumb-title">
                                            Third Cvlt Masks
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <ThirdCultMasks />
                <Pentimento />
                <VChatBot />
                <Coocucachew />
            </div>
        )
    }
}