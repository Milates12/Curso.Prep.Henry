
function obtenerMayor(x, y) {
  if(x > y) {
    return x;
    //Si "x" es mayor que "y" retornará "x"
  }
  return y;
  //si "y" es mayor que "x" retornará "y"
  //si "x" y "y" son iguales, retorna cualquiera de los dos 
}

function saludo(idioma) {
  if (idioma === 'aleman') {
    return 'Guten Tag!';
    // Si elijo idioma 'aleman', me mostrará el saludo 'Guten Tag!'
  } else if (idioma ==='ingles') {
    return 'Hello!';
    // Si elijo idioma 'ingles', me mostrará el saludo 'Hello!'
  } else if (idioma ==='mandarin') {
    return 'Ni Hao!';
    // Si elijo idioma 'mandarin', me mostrará el saludo 'Ni Hao!'
  } else {
    return 'Hola!';
    // Si hay una opción que no existe, me mostrará el saludo 'Hola!'
  }
}

function esDiezOCinco(num) {
  if (num === 10 || num === 5) {
    return true;
    //Si el num es 10 o 5 me retornará true
  } else {
    return false;
    // Si el num no es 10 o 5 retornará false
  }
}

function estaEnRango(num) {
  if (num > 20 && num < 50) {
    return true;
    //Si el num está entre 20 y 50 (no incluidos estos mismos valores) retornará true
  } else {
    return false;
    //Si el num no está entre 20 y 50 (no incluidos estos mismos valores) retornará false
  }
}

function esEntero(num) {
  if (num % 1 === 0) {
    return true;
    //si el num es entero retornará true
  } else {
    return false;
    // si num no es entero retornará false
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
    // Si el num es divisible entre 3 y 5, retornará fizzbuzz
  } else if (num % 3 === 0) {
    return 'fizz';
    // Si el num es divisible entre 3 solamente retornará fizz
  } else if (num % 5 === 0) {
    return 'buzz';
    // Si el numero es divisibe entre 5 solamente retornará buzz
  } else if (num % 3 !== 0 && num % 5!== 0) {
    return num; 
    //Si el num no es divisible entre ninguno (3 o 5) retornará el num
  }
}

function esPrimo(num) {
  for (var i = 2; i < num; i++) {
    // Los números primos empiezan desde el 2, para cualquier i mayor a 2, luego devuelve el valor de su operando antes de agregar uno
    if (num % i === 0) {
      return false;
      // Si el residuo entre num y i es igual 0, no es un numero primo por lo tanto, retornará false
    }
  }
  return num !== 1;
  // si el primo, retornará el mismo numero
}
