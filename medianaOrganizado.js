// Principal
// Ingreso de Datos y realiza:

// es una "lista de elementos" 
// if Datos NUMERICOS Y DINAMICOS que entre c/u se separa por una " , "
// else Datos que no son numeros = error 




var valuePrompt = window.prompt('Put your list of numbers to calculate your mediana, and then press F12', '100,200,400,600,500');
var futuroArray;

function conversionArray(valuePrompt)
{
  futuroArray = valuePrompt.split(",");
  for (let i = 0; i < futuroArray.length; i++) 
  {
    futuroArray[i] = parseInt(futuroArray[i]);
  }
  return futuroArray
};


function comparar(a, b)
{
  return a - b;
}

function esPar(arrayOrdenado){
  if (arrayOrdenado.length % 2 === 0) {
    return true;
} else {
    return false;
  }
};

function calcularMediana(arrayOrdenado)
{ 
  let mitadArrayOrdenado = parseInt(arrayOrdenado.length / 2);
  let resultadoelvi = esPar(arrayOrdenado);
  if (resultadoelvi == true) {
    let elemento1 = arrayOrdenado[mitadArrayOrdenado - 1];
    let elemento2 = arrayOrdenado[mitadArrayOrdenado];

    mediana = (elemento1 + elemento2) / 2;
    return mediana;
} else {   
    let mediana = arrayOrdenado[mitadArrayOrdenado];
    
    return mediana;
}
};
  
const main = function()
{
  let arrayResult = conversionArray(valuePrompt); //1ra Func
  
  let arrayOrdenado = arrayResult.sort(comparar); //2da Func

  let finEjercicio = calcularMediana(arrayOrdenado);
  console.log(finEjercicio)
  
}

main();