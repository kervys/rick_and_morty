import React from 'react';
import styles from '../form/Form.module.css';
import { validation } from './validation';

export default function Form(props) {
const [userData, setUserData] = React.useState({
  username: '',
  password: '',
})

const [error, setErrors] = React.useState({
  username: '',
  password: '',
})

function handleInputChange(e) {
  setUserData({...userData, [e.target.name]: e.target.value});
  setErrors(validation({...userData, [e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault();
  props.login(userData);
}

  return (
    <div className={styles.element}>
    <form classname={styles.borde} onSubmit={handleSubmit}>
    <label htmlFor='username'>Username:  </label>
    <input id="username" name="username" placeholder="Ingrese Usuario..." type="text" value={userData.username} onChange={handleInputChange}/>
    <p>{error.username}</p>
    <br /><br /><br />
    <label htmlFor='password'>Password:  </label>
    <input id="password" name="password" placeholder="Ingrese password..." type="password" value={userData.password} onChange={handleInputChange}/>
    <p>{error.password}</p>
    <br /><br /><br />
    <div className='boton'><input className={styles.boton} type='submit' /></div>
    </form>
    </div>
  )
}
