"use strict";
//Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//Perimetro
function perimetroCuadrado(lado) //Cuando definimos la funcion, lo que esta entre () son PARAMETROS y cuando llamamos la funcion y le otorgamos un valor, eso es un ATRIBUTO
{
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//Area
function areaCuadrado(lado)
{
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

console.group("Triangulos");
//Codigo del Triangulo
// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triangulo son de: " + ladoTriangulo1 
//   + "cm," 
//   + ladoTriangulo2 
//   + "cm,"
//   + baseTriangulo 
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + 5.5 + "cm");

//Perimetro
function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

//Area
function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

//Radio 
// const radioCirculo = 4;
// console.log("El radio del ciruclo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio)
{
    return radio * 2;
}

function radioCirculo(diametro)
{
    return diametro /2;
}

// Pi
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area 
function areaCirculo(radio)
{
    return (radio * radio) * PI;
}
console.groupEnd();

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    
    const area = areaTriangulo(value);
    alert(area);
}



function calcularRadioCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const radio = radioCirculo(value);
    alert(radio);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}

function compararLados(lado1, lado2, baseI)
{
    if (lado1 === lado2 && lado1 !=baseI && lado2 !=baseI) // 8l1 = 8l2   8 NO != base  8l2 NO != base  3    64  -  9 = 55
    {
        if (lado1 > baseI/2) 
        {
            resultado = lado1**2 - ((baseI/2)**2)
            alert("La altura del triangulo isoceles es: " + Math.sqrt (resultado) + "cm");

        }
        else
        {
            resultado = ((baseI/2)**2) - lado1**2 
            alert("La altura del triangulo isoceles es: " + Math.sqrt (resultado) + "cm");
        }
    }
    else
    {   
        alert("Esto no es un triangulo Isóceles, burro. El triangulo isoceles tiene 2 lados iguales.");
    } 
} 

function calcularAlturaTrianguloIsoceles()
{
    const input1 = document.getElementById("InputTrianguloIsoceles");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTrianguloIsoceles2");
    const value2 = input2.value;

    const inputBase = document.getElementById("InputTrianguloIsocelesBase");
    const valueBase = inputBase.value;

    if(value1 != "" && value2 != "" && valueBase != "")
    {
        compararLados(value1, value2, valueBase);
    }
    else
    {
        alert("Che flaco escribi con los numeritos");
    }
}

function cleanInputs()
{
    document.getElementById("InputTrianguloIsoceles").value = "";
    document.getElementById("InputTrianguloIsoceles2").value = "";
    document.getElementById("InputTrianguloIsocelesBase").value = "";
}


