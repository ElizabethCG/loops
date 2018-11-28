window.onload = () => {

  function calcularNombre() {
    const name = 'Martha';

    for (let i = 0; i < name.length; i++) {
      //console.log(i) -> muestra valor de i
      // console.log([i]) -> muestra posición
      console.log(name[i]);
    }

    /*
    const names = ['Marlene', 'Camila', 'Andrea', 'Pauli', 10];
    for (let i = 0; i < names.length; i++) {
      console.log(names[i])
    }
    */

  }

  function calcularNombre(name) {
    for (let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }

  // DO WHILE

  function validateUser() {
    let username;
    do {
      username = prompt('ingrese nombre');
      // lo que tiene que hacer
    } while(username === '') // condición
  }

  // WHILE

  function validateUser() {
    //let username;
    let username = '';
    while(username === '') {
      username = prompt('ingrese nombre');
    }
  }

  const validateUser = () => {
    //let username;
    let username = '';
    while(username === '') {
      username = prompt('ingrese nombre');
    }
  }

  function searchText(text, word) {
    if (text.indexOf(word) !== -1) {
      return true;
    }
    return false;
  }

  const searchText = (text, word) => (
    text.indexOf(word) !== -1 ? true : false
  )

}




// function nombredelafuncion(str) {

// }

// const nombredelafuncion = (str) => {

// }