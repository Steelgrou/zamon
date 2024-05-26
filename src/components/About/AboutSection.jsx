import React from 'react'
import AboutCard from './AboutCard'
import aboutFirst from '/aboutcard-first.jpg'
import aboutSecond from '/aboutcard-second.jpg'

export default function AboutSection() {
    return (

        <section>
            <div className="container">
                <div>
                    <h2>Explore Destinations With Ease</h2>
                    <h5>Find the best deals on railway and airplane tickets in each city, carefully selected for you.</h5>
                </div>
                <AboutCard img={aboutFirst} />
                <AboutCard img={aboutSecond}/>
                <div>
                    <h2>Visit One Of Our Countries Now</h2>
                    <h5>Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</h5>
                </div>
            </div>
        </section>
    )
}
