import React from 'react'
import firstImg from '/about-first.jpg'

import Button from '../Button/Button'
import './AboutCard.css'

export default function AboutCard({ title, subtitle, img }) {
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
                                <h4>Cheap Railway Tickets With Us</h4>
                                <span>Whole world</span>
                            </div>
                            <div className="aboutcard-btn">
                                <Button> Explore More</Button>
                            </div>
                            
                            <p>Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes,
                                bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the
                                globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network..
                            </p>
                           
                            
                        </div>
                    </div>
                    
                </div>
                <hr className="custom-hr" />
            </div>
        </section>
    )
}
