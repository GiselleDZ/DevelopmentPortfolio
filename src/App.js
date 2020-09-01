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
    <div className="app">
          <Helmet>
          {/* <!-- Standard Meta Tags --> */}
            <meta charset="utf-8" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,200;1,300&display=swap" rel="stylesheet" />

            <meta property="og:image" content="/assets/imgs/link-preview.JPG" />

            {/* <!-- Primary Meta Tags --> */}
            <title>Giselle Zatonyl Development Portfolio</title>
            <meta name="title" content="Giselle Zatonyl Development Portfolio" />
            <meta name="description" content="" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://dev.gisellezatonyl.com/" />
            <meta property="og:title" content="Giselle Zatonyl Development Portfolio" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="http://gisellezatonyl.com/images/dev/g-dev-site/link-preview.JPG" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://dev.gisellezatonyl.com/" />
            <meta property="twitter:title" content="Giselle Zatonyl Development Portfolio" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="http://gisellezatonyl.com/images/dev/g-dev-site/link-preview.JPG" />
            <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0" />
        </Helmet>

      <div className="body">
          <Navigation />
          <Header />
          <Intro />
          <Projects />
          <Footer />
      </div>
    </div>
  )
}

export default App
