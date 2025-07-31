
import './App.css'
import Header from "../components/Header"
import Content from "../components/content"
import AnonymArray from "../../data"

function App() {

  const h = AnonymArray.map((obj) => {
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
      <Header />
      <div className='container'>
      {h}
      </div>
      
    </>
  )
}

export default App
