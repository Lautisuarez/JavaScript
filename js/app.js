/* Ingreso de variables y comprobaciones */
let resultados,num1, num2, operacion;
let nombre = prompt('¡Bienvenid@! Ingrese su nombre: ')

/* Funciones */
const sumar = (nro1, nro2) => nro1 + nro2;
const restar = (nro1, nro2) => nro1 - nro2;
const multiplicar = (nro1, nro2) => nro1 * nro2;
const dividir = (nro1, nro2) => nro1 / nro2;
const muestraAlert = (nom, res) => alert(`Perfecto ${nom}! \n---------- Resultados ---------- \nTotal: ${res}.`)
const checkNum = txt => {
    let num = parseInt(prompt(`Ingrese el ${txt} número: `))
    while (!(Number.isInteger(num))){ /* Verificamos que el usuario ingreso correctamente un número, sino se lo volvemos a pedir */
        num = parseInt(prompt(`Error... Se pidió un número. Vuelva a ingresar el ${txt} número: `))
    }
    return num;
}
const checkOp = () => {
    let op = prompt('Ingrese la operación que desea hacer: \n( S[sumar], R[restar], M[multiplicar] o D[dividir] )').toLowerCase()
    while (!(['s', 'r', 'm', 'd'].includes(op))){ /* Verificamos que la operacion que eligió el usuario se encuentra en el array, sino se lo volvemos a pedir */
        op = prompt('Error... \nIngrese la operación que desea hacer: \n( S[sumar], R[restar], M[multiplicar] o D[dividir] )').toLowerCase()
    }
    return op;
}

/* Operaciones */
num1 = checkNum('primer')
num2 = checkNum('segundo')
operacion = checkOp()

switch (operacion) {
    case 's':
        resultados = sumar(num1, num2);
        break;
    case 'r':
        resultados = restar(num1, num2);
        break;
    case 'm':
        resultados = multiplicar(num1, num2);
        break;
    case 'd':
        resultados = dividir(num1, num2);
        break;
    default:
        break;
}

/* Mostramos por pantalla */
muestraAlert(nombre, resultados)