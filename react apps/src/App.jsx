
import './App.css'
import './home.css'
import Header from "../components/Header"
import Home from "../components/Home"
import Content from "../components/content"
import AnonymArray from "../data"
import projectlist from "../list"



function App() {
  
  const b = AnonymArray.map((obj) => {
    return (
      <Home
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
    <h1>Projects</h1>
   
    <Home projects={projectlist} />
      {/* <Header />
      <div className='container'>
        {h}
      </div> */}
      
    </>
  )
}

export default App
