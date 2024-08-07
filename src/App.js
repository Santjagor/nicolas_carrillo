import './App.css';
import Home from './View/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import MainArticle from './View/MainArticle/MainArticle'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

//Sections//
import Section1 from './View/Sections/Section-1/Section1'
import Section2 from './View/Sections/Section-2/Section2'
import Section3 from './View/Sections/Section-3/Section3'
import Section4 from './/View/Sections/Section-4/Section4'
import Section5 from './/View/Sections/Section-5/Section5'
//Sections//


function App() {
  const navigate = useNavigate()

  const handleBlog = () => {
    navigate(`/`)
  }

  const handleSections = (e) => {
    navigate(`/${e.target.id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Navbar
        handleBlog={handleBlog}
        handleSections={handleSections}
        navigate={navigate}
      />
      <Routes>
        <Route path='/' element=
          {
            <Home
              handleBlog={handleBlog}
              handleSections={handleSections}
            />
          } />
        <Route path='/transporte-publico' element={<Section1 />} />
        <Route path='/foros-de-seguridad' element={<Section2 />} />
        <Route path='/fondo-urbano' element={<Section3 />} />
        <Route path='/produccion' element={<Section4 />} />
        <Route path='/consumo-problematico' element={<Section5 />} />
        <Route path='/main-article' element={<MainArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
