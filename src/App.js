import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/projects/Projects'
import {Helmet} from "react-helmet"
import "../public/css/style.css"


const App = () => {
  return (
    <div className="body">
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Giselle Zatonyl Development Portfolio</title>
            <meta name="title" content="Giselle Zatonyl Development Portfolio" />
            <meta name="description" content="" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://dev.gisellezatonyl.com/" />
            <meta property="og:title" content="Giselle Zatonyl Development Portfolio" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="/assets/imgs/link-preview.JPG" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://dev.gisellezatonyl.com/" />
            <meta property="twitter:title" content="Giselle Zatonyl Development Portfolio" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="/assets/imgs/link-preview.JPG" />
        </Helmet>
        <Navigation />
        <Header />
        <Intro />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
