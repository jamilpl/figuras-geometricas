// Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
};

function areaCuadrado(lado) {
  return lado * lado;
};

console.groupEnd();


// Código del triángulo

console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();


// Código del círculo

console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
};

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};

function areaCirculo(radio) {
  return (radio * radio) * PI;
};

console.groupEnd();



// Aquí interactuamos con el HTML

// Código para calcular el cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


// Código para calcular el triángulo

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado1");
  const value1 = parseFloat(lado1.value);
  const lado2 = document.getElementById("lado2");
  const value2 = parseFloat(lado2.value);
  const base = document.getElementById("base");
  const value3 = parseFloat(base.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(`El perímetro del triángulo es: ${perimetro} cm`);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("base");
  const value3 = parseFloat(base.value);
  const altura = document.getElementById("altura");
  const value4 = parseFloat(altura.value);

  const area = areaTriangulo(value3, value4);
  alert(`El área del triángulo es: ${area} cm^2`)
}