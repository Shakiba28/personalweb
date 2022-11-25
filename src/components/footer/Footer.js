import React from "react";
import './Footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">SHKIBA</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://telegram.com"><BsTelegram /></a>
                <a href="https://whatsapp.com"><BsWhatsapp /></a>
            </div>

            <div className="footer__copyright">
                <small> &copy; </small>
            </div>
        </footer>
    )
}


export default Footer