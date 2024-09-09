const vaciar = () => {
	document.getElementById("pantalla").value = "";
};

const rellenar_info = (resultado) => {
	let info = document.getElementById("info");

	if (resultado < 100) {
		info.textContent = "Info: El resultado es menor que 100";
	} else if (resultado >= 100 && resultado <= 200) {
		info.textContent = "Info: El resultado está entre 100 y 200";
	} else {
		info.textContent = "Info: El resultado es superior a 200";
	}
};

//--------------Operaciones unitarias----------------

const mod = () => {
	let num = document.getElementById("pantalla");
	if (validar() && validadorPorOperacion("mod", num.value)) {
		num.value = Math.abs(num.value);
		rellenar_info(num.value);
	}
};

// Función para calcular el factorial usando un bucle for
const fact = () => {
	let num = document.getElementById("pantalla");
	if (validar() && validadorPorOperacion("fact", num.value)) {
		let resultado = 1;
		for (let i = 1; i <= num.value; i++) {
			resultado *= i;
		}

		num.value = resultado;
		rellenar_info(num.value);
	}
};

const cuadrado = () => {
	let num = document.getElementById("pantalla");

	if (validar() && validadorPorOperacion("cuadrado", num.value)) {
		num.value = num.value * num.value;
		rellenar_info(num.value);
	}
};

//------------Operaciones binarias----------------

let primerTermino;
let operacion;

const add = () => {
	let num = document.getElementById("pantalla");

	if (validar() && validadorPorOperacion("add", num.value)) {
		primerTermino = document.getElementById("pantalla").value;
		operacion = "+";
	}
};

const res = () => {
	let num = document.getElementById("pantalla");

	if (validar() && validadorPorOperacion("res", num.value)) {
		primerTermino = document.getElementById("pantalla").value;
		operacion = "-";
	}
};

const mul = () => {
	let num = document.getElementById("pantalla");

	if (validar() && validadorPorOperacion("mul", num.value)) {
		primerTermino = document.getElementById("pantalla").value;
		operacion = "*";
	}
};

const div = () => {
	let num = document.getElementById("pantalla");

	if (validar() && validadorPorOperacion("div", num.value)) {
		primerTermino = document.getElementById("pantalla").value;
		operacion = "/";
	}
};

//------------Operaciones CSV----------------

const sumatoria = () => {
	if (validar()) {
		let num = document.getElementById("pantalla");

		let numeros = num.value.split(",");
		let resultado = numeros.reduce((acumulador, valorActual) => {
			return acumulador + parseFloat(valorActual);
		}, 0);

		num.value = resultado;
		rellenar_info(num.value);
	}
};

const ordenar = () => {
	if (validar()) {
		let num = document.getElementById("pantalla");

		let numeros = num.value.split(",");
		let resultado = numeros
			.map(Number)
			.sort((a, b) => a - b)
			.join(",");

		num.value = resultado;
	}
};

const revertir = () => {
	if (validar()) {
		let num = document.getElementById("pantalla");

		let numeros = num.value.split(",");

		let resultado = numeros.reverse();

		num.value = resultado;
	}
};

const quitar = () => {
	if (validar()) {
		let num = document.getElementById("pantalla");

		let numeros = num.value.split(",");

		numeros.pop();

		num.value = numeros;
	}
};

//-----

const eq = () => {
	let segundoTermino = document.getElementById("pantalla");

	let num1 = parseFloat(primerTermino);
	let num2 = parseFloat(segundoTermino.value);
	let resultado = 0;

	const operacionNombres = {
		"+": "add",
		"-": "res",
		"*": "mul",
		"/": "div",
	};

	const operaciones = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};

	if (validar() && validadorPorOperacion(operacionNombres[operacion], num2)) {
		resultado = operaciones[operacion](num1, num2);
		rellenar_info(resultado);
		operacion = "";
		segundoTermino.value = resultado;
	}
};

const validar = () => {
	let num = document.getElementById("pantalla");
	let info = document.getElementById("info");
	let err = document.getElementById("error");

	err.textContent = "";

	const testRegex = /^-?\d+(\.\d+)?(,-?\d+(\.\d+)?)*$/;

	/*
    "123"
    "-123"
    "123.23"
    "-123.23"
    "0.4"
    "-0.4"
    "123,456,78.9"
    "-1,0,1.5,-2.5" 
    */

	if (num.value == "") {
		err.textContent = "Error: Introduce un número";
	} else if (!testRegex.test(num.value.trim())) {
		err.textContent = "Error: Entrada no soportada.";
		num.value = "";
	} else {
		return true;
	}

	info.textContent = "Info sobre el número";
	return false;
};

const validadorPorOperacion = (operacion, valor) => {
	let num = document.getElementById("pantalla");
	let err = document.getElementById("error");
	err.textContent = "";

	const regexR = /^-?\d+(\.\d+)?$/; // para numeros enteros o decimales positivos y negativos

	switch (operacion) {
		case "mod":
			if (!regexR.test(valor)) {
				err.textContent = "Error: Entrada no valida para modulo.";
				num.value = "";
				return false;
			}
			break;
		case "fact":
			const regexFact = /^\d+$/; // para numeros enteros positivos

			if (!regexFact.test(valor)) {
				err.textContent = "Error: Entrada no valida para factorial.";
				num.value = "";
				return false;
			}
			break;

		case "cuadrado":
			if (!regexR.test(valor)) {
				err.textContent = "Error: Entrada no valida para cuadrado.";
				num.value = "";
				return false;
			}
			break;

		case "add":
		case "res":
		case "mul":
			if (!regexR.test(valor)) {
				err.textContent = "Error: Entrada no valida para esta operacion.";
				num.value = "";
				return false;
			}
			break;
		case "div":
			if (valor == 0 || !regexR.test(valor)) {
				err.textContent = "Error: Entrada no valida para esta operacion.";
				num.value = "";
				return false;
			}

			break;
		default:
			break;
	}

	return true;
};
