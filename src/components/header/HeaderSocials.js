import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/Shakiba28">< BsGithub /></a>
            <a href="https://linkdin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><BsGithub /></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
        </div >
    )
}


export default HeaderSocials