import React from "react";
import './Footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo"><img src="../../assets/logo.png" alt="logo" /></a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/Shakiba28">< BsGithub /></a>
                <a href="https://instagram.com/shakiba_baghishani"><BsInstagram /></a>
                <a href="t.me/Shakiba_baghishani"><BsTelegram /></a>
                <a href="https://api.whatsapp.com/send?phone=989363738295"><BsWhatsapp /></a>
            </div>

            <div className="footer__copyright">
                <small> &copy; </small>
            </div>
        </footer>
    )
}


export default Footer