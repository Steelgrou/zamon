
import './App.css'
import AboutSection from './components/About/AboutSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Reservation from './components/Reservation/Reservation'
import Entrance from './components/entrance/Entrance'

import { useTranslation } from 'react-i18next'





function App() {
  
// Lang function
const { t, i18n } = useTranslation();
const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
}
  return (
    <>
      <Header />
      <Entrance />
      <AboutSection />
      <Reservation />
      <Footer />
      
    </>
  )
}

export default App
