import React from 'react'
import './App.css'
import Header from './Header'
import Introduction from './Introduction'
import About  from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
      <div className="App">

        <Header />
        <Introduction />
        <About />
        <Projects />
        <Contact /> 
        <Footer />
      </div>
  );
}

export default App;
