import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import "./App.css";
import Cards from "../src/components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail.jsx";
import Form from './components/form/Form'

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'kervys@soyhenry.com';
  const password = 'kervys24';
  
  function login(userData){
    if(userData.username === username && userData.password === password)
    {
      setAccess(true)
      navigate('/home')
    } else {
      alert('Usuario o Contrasena Incorrecta')
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID desde App');
          }
       });
  }

const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))

};

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div> {location.pathname !== "/" && <Nav onSearch={onSearch} />}
        
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/detail/:detalle" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
