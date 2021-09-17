/* Ingreso de variables */
let resultados = null;
let nombre = prompt('¡Bienvenid@! Ingrese su nombre: ')
let num1 = Number(prompt('Ingrese el primer número: '))
let num2 = Number(prompt('Ingrese el segundo número: '))
let op = prompt('Ingrese la operación que desea hacer: \n( S[sumar], R[restar], M[multiplicar] o D[dividir] )').toLowerCase()

/* Operaciones y condiciones */
if (op === 's') {
    resultados = num1 + num2
} else if (op === 'r') {
    resultados = num1 - num2
} else if (op === 'm') {
    resultados = num1 * num2
} else if (op === 'd') {
    resultados = num1 / num2
}

/* Mostramos por pantalla */
if (isNaN(resultados)){ /* Si el usuario ingreso un string en vez de un número el resultado va a ser igual a NaN */
    alert('Error! Número ingresado incorrecto...')
} else if (resultados != null){ /* Si el usuario ingreso una letra incorrecta en las operaciones el resultado va a ser igual a null */
    alert(`Perfecto ${nombre}! \n---------- Resultados ---------- \nTotal: ${resultados}.`)
} else { 
    alert('Error! Operación ingresada incorrecta...')
}