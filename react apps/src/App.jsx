import "./App.css"
import Header from "../components/Header"
import Memeheader from "../components/Memeheader"
import Mememain from "../components/Mememain"
import Main from "../components/Main"
import Home from "../components/Home"
import Headerchef from  "../components/Headerchef"
import Content from "../components/content"
import AnonymArray from "../data"
import projectlist from "../list"
import { useEffect } from "react"
import { BrowserRouter as Router  , Routes , Route } from 'react-router-dom'

function App() {





  const b = AnonymArray.map((obj) => {
    return (
      <Content
        img={{
          src: obj.img.src,
          alt: obj.img.alt
        }}
        title={obj.title}
        country={obj.country}
        googleMapsLink={obj.googleMapsLink}
        dates={obj.dates}
        text={obj.text}
      />
    );
  });

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<>
              <Home projects={projectlist} /> 
            </>}/>

            <Route path='/content' element={<>
              <Header /> 
              <div className='cont'>
                {b}
              </div>
            </>}/>

            <Route path='/Chefclaude' element={<>
              <Headerchef />
              <Main />
            </>}/>


            <Route path='/memegenerator' element={<>
              <Memeheader />
              <Mememain />
            </>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
     