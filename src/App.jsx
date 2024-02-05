import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import CopyrightFooter from './components/CopyrightFooter'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    <CopyrightFooter/>
    </>
  )
}

export default App
