import React, { Component } from "react"
import Pentimento from './Pentimento'
import Coocucachew from './Coocucachew'
import VChatBot from './VChatBot'

export default class Projects extends Component {
    render(){
        return(
            <div className="projects" id="projects">
                <Pentimento />
                <VChatBot />
                <Coocucachew />
            </div>
        )
    }
}