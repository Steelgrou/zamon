
import './App.css'
import AboutSection from './components/About/AboutSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Reservation from './components/Reservation/Reservation'
import Entrance from './components/entrance/Entrance'

import ruTranslation from '../public/locales/ru.json';
import enTranslation from '../public/locales/en.json';





function App() {
  

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
