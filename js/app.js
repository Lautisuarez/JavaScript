/* Ingreso de variables */
let nombre = prompt('¡Bienvenido! Ingrese su nombre: ')
let num1 = prompt('Ingrese el primer número: ')
let num2 = prompt('Ingrese el segundo número: ')

/* Realizamos las operaciones */
let suma = Number(num1) + Number(num2)
let resta = Number(num1) - Number(num2)
let multiplicacion = Number(num1) * Number(num2)
let division = Number(num1) / Number(num2)

/* Mostramos por consola y pantalla */
alert(`Perfecto ${nombre}! Presione 'aceptar' y puede ver sus resultados por consola ->`)
console.log('----- RESULTADOS -----')
console.log(`Suma: ${suma} \nResta: ${resta} \nMultiplicación: ${multiplicacion} \nDivisión: ${division}`)