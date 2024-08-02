import React from "react";
import CV from '../../assets/Jobinja-AD-8457916 (1).pdf'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primery">Let's Talk</a>
        </div>
    )
}


export default CTA