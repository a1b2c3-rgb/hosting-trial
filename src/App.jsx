import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
