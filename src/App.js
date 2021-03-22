import React, { Component } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/projects/Projects'
import Loading from './components/Loading'
import "../public/css/style.css"
import ContactPop from './components/ContactPop'


export default class App extends Component {
  constructor(){
    super()
      this.state = {
          loaded : false
      }
  }

  componentDidMount(){
      this.setState({
          loaded : true
      })
  }
  
  render(){
    return (
        <div className="body">
            <Navigation />
            <ContactPop />

            {
                this.state.loaded === true ? (
                    <div id="loaded">
                        <a href="#HiHello" className="btt">
                            <figure className="btt__main">
                                <figcaption className="btt__caption">
                                    <span className="btt__arrow">&#x2191;</span> Back to Top
                                </figcaption>
                            </figure>
                        </a>

                        <Header />
                        <Intro />
                        <Projects />
                    </div>
                  ) 
                  : ( <Loading /> )
            }
            <Footer />
        </div>
    )
  }
}
