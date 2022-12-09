const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const regexpassword = /^([a-zA-Z0-9]{4,16})$/g;

export function validation (userData) {
    let error = {}

    if(!regexEmail.test(userData.username)) error.username = 'Valide su email de usuario' 
    else if(!userData.username) error.username ='Campo de usuario no debe estar vacio'
    else if(!userData.username.length > 35) error.username = 'Nombre de usuario no debe ser mayor a 35 caracteres';

    if(!regexpassword.test(userData.userpassword)) error.password = 'Clave debe un numero'
    else if (userData.password < 6 && userData.password > 10) error.password = 'Password debe ser entre 6 y 10 caracteres';

    return error;
}