import React from 'react'

import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import './AboutCard.css'

export default function AboutCard({ title, subtitle, desc, img }) {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (
        <section>

            <div className="container">
                <div className="aboutcard-wrapper">
                    <div className="aboutcard-left">
                        <div className="aboutcard-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="aboutcard-right">
                        <div className="aboutcard-box">
                            <div>
                                <h4>{title}</h4>
                                <span>{subtitle}</span>
                            </div>
                            <div className="aboutcard-btn">
                                <Button> Explore More</Button>
                            </div>
                            
                            <p>{desc}</p>
                           
                            
                        </div>
                    </div>
                    
                </div>
                <hr className="custom-hr" />
            </div>
        </section>
    )
}
