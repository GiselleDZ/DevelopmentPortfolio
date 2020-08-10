import React from 'react'
import Footer from './components/footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import "../public/css/style.css"


const App = () => {
  return (
    <div className="body">
        <Navigation />
        <Header />
        <Footer />
    </div>
  )
}

export default App
