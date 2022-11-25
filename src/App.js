import React from "react";
import './index.css'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import About from "./components/about/About.js";
import Experience from "./components/experience/Experience.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}


export default App