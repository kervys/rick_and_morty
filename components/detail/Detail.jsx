import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../detail/Detail.module.css'

export default function Detail() {
const {detalle}= useParams();
const navigate = useNavigate()
  //creamos un estado
const [character, setCharacter] = useState();

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detalle}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID Desde Detail");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID error detail");
    });
  return setCharacter({});
}, [detalle]);

const handleClick =() => {
  navigate('/home');
}

  return (
    <div className={styles.center}>
      
      {character ? (
      <div>
        <div className={styles.card}>
          <h1>{character.name}</h1>
          <h5>{character.status}</h5>
          <h5>{character.species}</h5>
          <h5>{character.gender}</h5>
        </div>
        <div className={styles.image}>
          <img src={character.image} alt={character.name} />
        </div>
        <button className={styles.cssbotom} onClick={handleClick}>Go Home</button>
      </div>

  ) : (
    "No hagas nada"
  )}
  </div>
  );
}
/*     <h5>{character.origin?.name}</h5>     */