import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFavorites, deleteFavorites } from "../redux/actions.js";
import { connect } from 'react-redux';

export function Card(props) {
  //   console.log(props);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);


  function handleFavorite() {
    if(isFav) {
      setIsFav(false)
      props.deleteFavorites(props.id)
    } else {
      setIsFav(true)
      props.addFavorites(props.id)
    }
  }

  return (
    <div className={styles.card}>
      { isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
    }
      <button onClick={props.onClose}>X</button>
    <h6>{props.id}</h6>
      <Link to={`/detail/${props.id}`}>
      <h2>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: function (id){
      dispatch(addFavorites(id))
    },
    deleteFavorites: function (id){
      dispatch(deleteFavorites(id))
    }
  }
}

export function mapStateToProps(state){
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)