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

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
};

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
  document.getElementById("resultadoCuadrado").value = perimetro + "cm";
  // alert(`El perímetro del cuadrado es: ${perimetro}cm`);
};


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  document.getElementById("resultadoCuadrado").value = area + "cm²";
  // alert(`El área del cuadrado es: ${area}cm²`);
};


// Código para calcular el triángulo

function calcularPerimetroTriangulo() {
  const lado1T = document.getElementById("lado1T");
  const value1T = parseFloat(lado1T.value);

  const lado2T = document.getElementById("lado2T");
  const value2T = parseFloat(lado2T.value);

  const baseT = document.getElementById("baseT");
  const value3T = parseFloat(baseT.value);

  const perimetroT = perimetroTriangulo(value1T, value2T, value3T);
  document.getElementById("resultadoTriangulo").value = perimetroT + "cm";
  // alert(`El perímetro del triángulo es: ${perimetroT}cm`);
};

function calcularAreaTriangulo() {
  const baseT = document.getElementById("baseT");
  const value3T = parseFloat(baseT.value);

  const alturaT = document.getElementById("alturaT");
  const value4T = parseFloat(alturaT.value);

  const areaT = areaTriangulo(value3T, value4T);
  document.getElementById("resultadoTriangulo").value = areaT + "cm²";
  // alert(`El área del triángulo es: ${areaT}cm²`)
};


// Código para calcular el círculo

function calcularPerimetroCirculo() {
  const radioCirculo = document.getElementById("radioCirculo");
  const valueCir = parseFloat(radioCirculo.value);

  const perimetroCir = perimetroCirculo(valueCir);

  document.getElementById("resultadoCirculo").value = perimetroCir + "cm";
  // alert(`El Perímetro del círculo es: ${perimetroCir}cm`);
};

function calcularAreaCirculo() {
  const radioCirculo = document.getElementById("radioCirculo");
  const valueCir = parseFloat(radioCirculo.value);

  const areaCir = areaCirculo(valueCir);

  document.getElementById("resultadoCirculo").value = areaCir + "cm²";
  // alert(`El Área del círculo es: ${areaCir}cm²`);
};


// Código para calcular la altura de un triángulo isósceles


function calcularTrianguloIso() {
  const isoLado1 = document.getElementById("isoLado1");
  const isoValue1 = parseFloat(isoLado1.value);

  const isoLado2 = document.getElementById("isoLado2");
  const isoValue2 = parseFloat(isoLado2.value);

  const isoBase = document.getElementById("isoBase");
  const isoBaseValue = parseFloat(isoBase.value);

  if (isoValue1 != isoValue2) {
    alert(`No se puede calcular debido a que los lados son diferentes`);    
  }else {
    const pequenoLado2 = isoBaseValue / 2;
    const pequenoBase = isoValue1;

    const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
    const pequenoBaseCuadrado = pequenoBase * pequenoBase;
    
    const pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

    const grandeAltura = pequenoLado1;

    document.getElementById("resultadoTrianguloIsosceles").value = grandeAltura + "cm";
    // alert(`La altura del triángulo es: ${grandeAltura}cm`);
  };
};