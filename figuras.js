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
  alert(`El perímetro del cuadrado es: ${perimetro}cm`);
}


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(`El área del cuadrado es: ${area}cm^2`);
}


// Código para calcular el triángulo

function calcularPerimetroTriangulo() {
  const lado1T = document.getElementById("lado1T");
  const value1T = parseFloat(lado1T.value);
  const lado2T = document.getElementById("lado2T");
  const value2T = parseFloat(lado2T.value);
  const baseT = document.getElementById("baseT");
  const value3T = parseFloat(baseT.value);

  const perimetroT = perimetroTriangulo(value1T, value2T, value3T);
  alert(`El perímetro del triángulo es: ${perimetroT}cm`);
}

function calcularAreaTriangulo() {
  const baseT = document.getElementById("baseT");
  const value3T = parseFloat(baseT.value);
  const alturaT = document.getElementById("alturaT");
  const value4T = parseFloat(alturaT.value);

  const areaT = areaTriangulo(value3T, value4T);
  alert(`El área del triángulo es: ${areaT}cm^2`)
}


// Código para calcular el círculo

function calcularPerimetroCirculo() {
  const radioCirculo = document.getElementById("radioCirculo");
  const valueCir = parseInt(radioCirculo.value);
  const perimetroCir = perimetroCirculo(valueCir);
  
  alert(`El Perímetro del círculo es: ${perimetroCir}cm`);
}

function calcularAreaCirculo() {
  const radioCirculo = document.getElementById("radioCirculo");
  const valueCir = radioCirculo.value;
  const areaCir = areaCirculo(valueCir);

  alert(`El Área del círculo es: ${areaCir}cm^2`);
}