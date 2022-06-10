//Tablas. Soporta hasta el valor 8190 base 10
const TABLEBINARY = [4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

const binary = [];
const inputResult = document.getElementById('result');

//Se activa el evento click cuando presionamos el boton
document.getElementById('button').addEventListener('click', event => {
  event.preventDefault();

  //Limpia el input
  inputResult.value = '';
  const number = document.getElementById('number').value;

  //Invoca a la funcion convert
  convert(number);

  //Quitar los ceros antes del 1
  while (binary[0] === 0) {
    binary.shift();
  }

  //Si el numero decimal es solo un 0 pushearlo
  if (binary.length === 0) {
    binary.push(0);
  }

  //Iterar sobre el array binary resultante y mostrarlos en el input
  for (let bit of binary) {
    inputResult.value += bit;
  }
  //Limpiar el array
  binary.splice(0, binary.length);
});

/**
 * Convertir el numero de base 10 a binario y pusharlo al array binary
 * @param {number} number Numero de base 10 recibido por el usuario
 */
const convert = number => {
  for (let digit of TABLEBINARY) {
    if (number >= digit) {
      binary.push(1);
      number -= digit;
    } else {
      binary.push(0);
    }
  }
};
