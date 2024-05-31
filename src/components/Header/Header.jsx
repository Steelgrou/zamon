import './Header.css'
import { useTranslation } from 'react-i18next'
import ruFlag from '/flag.png'

import enFlag from '/flag.png'

import logo from '/logo.svg'
import telegram from '/telegram.svg'
import instagram from '/instagram.svg'

function Header() {
 // Lang function
 const { t, i18n } = useTranslation();
 const handleChange = (event) => {
     const selectedLaungage = event.target.value;
     i18n.changeLanguage(selectedLaungage);
 }

    return (
        <>
            <section id='header'>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <img src={logo} alt="" />
                        </div>
                        <nav>
                            <div className="navbar-list">
                                <ul>
                                    <li className='navbar-item'><a href="/">Home</a></li>
                                    <li className='navbar-item'><a href="/">About</a></li>
                                    <li className='navbar-item'><a href="/">Tours</a></li>
                                    <li className='navbar-item'><a href="/">Contacts</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="header-box">
                            <div className="header-box">
                                <select name="Lang" id="Lang" onChange={handleChange} className="language-selector">
                                    <option value="en"><img className='ruFlag' src={ruFlag} alt="ruFlag" />English</option>
                                    <option value="ru"> <img className='enFlag' src={enFlag} alt="enFlag" />Русский</option>
                                </select>
                            </div>
                            <div className="header-social">
                                <a href="/"><img src={telegram} alt="" /></a>
                                <a href="/"><img src={instagram} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
