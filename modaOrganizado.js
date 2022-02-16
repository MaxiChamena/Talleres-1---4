

function inputsNumbers() {
  const input = document.getElementById("InputNumbers");
  const value = input.value;

  return value;
}

function conversionArray(lista) {
  let futuroArray = lista.split(",");
  for (let i = 0; i < futuroArray.length; i++) {
    futuroArray[i] = parseInt(futuroArray[i]);
  }
  return futuroArray;
}

function comparar(a, b)
{
  return a - b;
};

function repetidos (arrayOrdenado)
{
  let arrayChiquito = [];
  let repetidor = 1;
  for (let i = 0; i < arrayOrdenado.length; i++) {
    if (i != arrayOrdenado.length - 1 && arrayOrdenado[i] == arrayOrdenado [i + 1]){
      repetidor = repetidor + 1;
    }
    else{
      arrayChiquito.push([arrayOrdenado[i], repetidor]);
      repetidor = 1;
    }
  }
  return arrayChiquito
};
//verificar que funciona
// var moda = listaArray[listaArray.length - 1]; // Este .length -1 es para que encaje justito con la posicion del array cuyo elemento es el mas repetido
// console.log(moda)

const main = function () 
{
  let inputResult = inputsNumbers();

  let arrayResult = conversionArray(inputResult);

  let arrayOrdenado = arrayResult.sort(comparar);

  
  let array_de_Arrays = repetidos (arrayOrdenado);
  console.log(array_de_Arrays)
};