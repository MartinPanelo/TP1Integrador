# Ejercicio javascript: Expresiones, variables, funciones, objetos, sentencias, DOM y Arrays - Calculadora

## Objetivo
Practicar con expresiones básicas, variables, asignaciones, if…else, switch…case, bucles, tipos number, string, boolean, eventos sencillos, arrays, así como con objetos DOM y Date.

## Descripción de la práctica
En esta entrega se desarrolla una aplicación web de calculadora. El objetivo es implementar las operaciones detalladas en el apartado "Tareas".

## Tareas

### 1. Campo informativo:
Añadir un elemento `<h2>` con id `#info`, clase `.grande`, atributo `title="Info sobre el número"` y contenido inicial "Info sobre el número". Este elemento se actualizará tras cada cálculo realizado. En un inicio, solo para la función cuadrado, mostrando mensajes según el valor del resultado.

### 2. Operaciones unitarias:
- **Módulo**: Crear un botón con id `modulo` que llama a la función `mod()` para calcular el valor absoluto de X.
- **Factorial**: Crear un botón con id `factorial` que llama a la función `fact()` para calcular el factorial de X.

### 3. Operaciones binarias:
Añadir botones para:
- **Multiplicación** (`mul()`).
- **Suma** (`add()`).
- **Igual** (`eq()`), que ejecutará la operación correspondiente y mostrará el resultado.

### 4. Operaciones en formato CSV:
Añadir las siguientes operaciones para listas CSV de números:
- **Sumatoria** (`sumatoria()`): Suma los elementos del input.
- **Ordenar** (`ordenar()`): Ordena los números en orden ascendente.
- **Revertir** (`revertir()`): Invierte el orden de los números.
- **Quitar** (`quitar()`): Elimina el último número de la lista.

### 5. Tratamiento de errores:
Implementar una función `validar()` para comprobar que la entrada sea válida antes de realizar cualquier operación. La calculadora debe soportar números enteros, decimales (positivos y negativos), y listas en formato CSV.

## Consideraciones adicionales y recomendaciones
- Todas las funciones deben utilizar la notación arrow.
- Se recomienda añadir estilo CSS adicional.
- Los textos de los botones quedan a elección del alumno.

## Instrucciones para la Entrega y Evaluación.
1. Comprimir y adjuntar el archivo comprimido.
2. Publicar en Neocities y enviar la URL de la publicación.
