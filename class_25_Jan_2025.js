/* Apuntes Básicos de Programación en JavaScript 

Declaración de Variables
En JavaScript, existen tres formas de declarar variables:

```js
var lastName = "Persona1"; // Variable global (evitar en código moderno)
let firstName = "Timmy"; // Variable con alcance de bloque
const age = 25; // Constante (no puede ser reasignada)
```
Tipos de Datos en JavaScript

- Number**: Números enteros o decimales (`1, 0.3`)
- **String**: Cadenas de texto (`"Hola"`, `"#@$%"`)
- **Boolean**: Valores de verdad (`true, false`)
- **Null**: Representa la ausencia de valor
- **Undefined**: Valor no definido

Ejemplo:

```js
let numberExample = 42;
let stringExample = "Hola mundo";
let booleanExample = true;
let nullExample = null;
let undefinedExample;
```

## Operadores en JavaScript

### Operadores Aritméticos y Lógicos
- `&&` (AND lógico - y)
- `||` (OR lógico - o)
- `===` (Comparación estricta - igual en valor y tipo)
- `!true`, `!false` (Negación lógica)

Ejemplo:

```js
var name = "Persona1";
console.log(name === lastName); // Compara si name es igual a lastName
```

## Condicionales en JavaScript

Las estructuras condicionales permiten tomar decisiones en el código:

```js
var age = 12;
var nameAge = age + 50;

if (age > 18) {
    console.log("Es mayor de edad");
} else if (age > 12) {
    console.log("Es mayor a 12");
} else {
    console.log("No cumple ninguna condición");
}
```

## Arreglos en JavaScript

Los arreglos almacenan múltiples valores en una sola variable:

```js
const array = [110, true, 'texto', 2, 3, 3, 3];
const array2 = ["Hola", "Mundo"] // Solo contiene strings

const persona = ['Timmy', 'Lopez', 27, true]; // Datos básicos de una persona
```

### Manipulación de Arreglos

```js
const carCopy = [];
const model = 'Q3';
carCopy.push(model); // Agregar elemento al array

console.log(carCopy.length); // Ver la longitud del array

for (let i = 0; i < carCopy.length; i++) {
    console.log('El valor del arreglo en el índice', i, 'es', carCopy[i]);
    if (i == 1) {
        console.log('Valor en el índice', i, 'es', carCopy[i]);
    }
}
```

## Objetos en JavaScript

Los objetos permiten almacenar información en pares clave-valor:

```js
const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: false
};

console.log(persona.nombre); // Acceder a una propiedad
```

## Funciones en JavaScript

Las funciones permiten reutilizar código y modularizar la lógica:

```js
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Carlos"));
```

*/