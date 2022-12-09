import Card from "../card/Card";
import styles from "./Cards.module.css";
import React from 'react'

export default function Cards(props) {
  const { characters, onClose } = props;
  //   console.log(characters);
  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() =>onClose(char.id) }
        />
      ))}
    </div>
  );
}
