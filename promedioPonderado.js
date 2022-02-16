// funcion de PromedioPonderado multiplicamos cada dato con su ponderacion y lo dividimos por la suma total de los ponderados

let n1 = 0.0;
let n2 = 0.0;
let n3 = 0.0;
let n4 = 0.0;
let p1 = 0.0;
let p2 = 0.0;
let p3 = 0.0;

function inputNumbers(){
    let valueNota1 = document.getElementById("inputNumbers1");
    n1 = parseFloat(valueNota1.value);

    let valueNota2 = document.getElementById("inputNumbers2");
    n2 = parseFloat(valueNota2.value);

    let valueNota3 = document.getElementById("inputNumbers3");
    n3 = parseFloat(valueNota3.value);

    let valueNota4 = document.getElementById("inputNumbers4");
    n4 = parseFloat(valueNota4.value);

    let ponderadoPrimero = document.getElementById("inputNumbers5");
    p1 = parseFloat(ponderadoPrimero.value);

    let ponderadoSegundo = document.getElementById("inputNumbers6");
    p2 = parseFloat(ponderadoSegundo.value);

    let ponderadoTercero = document.getElementById("inputNumbers7");
    p3 = parseFloat(ponderadoTercero.value);
};

function calcularPromedioPonderado (){
    inputNumbers()
    let calculo = parseFloat(((n1*p1)+(n2*p1)+(n3*p2)+(n4*p3)) / (p1+p1+p2+p3));
    console.log(calculo)

};

function main(){
let promedioPonderado = calcularPromedioPonderado();
console.log(promedioPonderado)
// alert("el promedio ponderado es " + promedioPonderado)
}
