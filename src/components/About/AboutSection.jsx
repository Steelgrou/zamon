import React from 'react'
import { useTranslation } from 'react-i18next'

import AboutCard from './AboutCard'

import aboutFirst from '/aboutcard-first.jpg'
import aboutSecond from '/aboutcard-second.jpg'
import aboutThird from '/aboutcard-third.jpg'
import aboutFourth from '/aboutcard-fourth.jpg'
import aboutFifth from '/aboutcard-fifth.jpg'
import aboutSixth from '/aboutcard-sixth.jpg'


export default function AboutSection() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (

        <section>
            <div className="container">
                <div>
                    <h2>Explore Destinations With Ease</h2>
                    <h5>Find the best deals on railway and airplane tickets in each city, carefully selected for you.</h5>
                </div>
                <AboutCard img={aboutFirst} title={t('aboutcard.first.title')} subtitle={t('aboutcard.first.subtitle')} desc={t('aboutcard.first.desc')} />
                <AboutCard img={aboutSecond} title={t('aboutcard.second.title')} subtitle={t('aboutcard.second.subtitle')} desc={t('aboutcard.second.desc')} />
                <AboutCard img={aboutThird} title={t('aboutcard.third.title')} subtitle={t('aboutcard.third.subtitle')} desc={t('aboutcard.third.desc')} />
                <AboutCard img={aboutFourth} title={t('aboutcard.fourth.title')} subtitle={t('aboutcard.fourth.subtitle')} desc={t('aboutcard.fourth.desc')} />
                <AboutCard img={aboutFifth} title={t('aboutcard.fifth.title')} subtitle={t('aboutcard.fifth.subtitle')} desc={t('aboutcard.fifth.desc')} />
                <AboutCard img={aboutSixth} title={t('aboutcard.sixth.title')} subtitle={t('aboutcard.sixth.subtitle')} desc={t('aboutcard.sixth.desc')} />
                <div>
                    <h2>Visit One Of Our Countries Now</h2>
                    <h5>Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</h5>
                </div>
            </div>
        </section>
    )
}
