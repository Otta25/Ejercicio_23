
/**
 * Colocar aquí JS "propio".
 * Notar que este código se ejecutará en el navegador.
 */

async function traerDatos() {
const response = await fetch('http://localhost:3000/articulos');
const resJson = await response.json()
console.log(resJson);
}

traerDatos() 


