import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/projects/Projects'
import Main from './components/Main'
import "../public/css/style.css"


const App = () => {
  return (
    <div className="body">
        <Navigation />
        <Header />
        <Main />
        <Intro />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
