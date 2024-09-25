import React from "react";
import './Header.css'
import CTA from "./CTA";
import ME from '../../assets/shaki-removebg-preview.png'
import HeaderSocials from "./HeaderSocials";


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Shakiba Baghishani</h1>
                <h5 className="text-light"> web designer and web developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} />
                </div>


                <a href="#contact" className="scroll__down">scroll down</a>
            </div>

        </header>
    )
}


export default Header