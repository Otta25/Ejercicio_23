
/**
 * Colocar aquí JS "propio".
 * Notar que este código se ejecutará en el navegador.
 */


let articles = document.querySelectorAll('.article-card');


articles.forEach(e => e.addEventListener('click',(e)=>{
 let titleValue = e.target.innerText
 window.location.href =`http://localhost:3000/${titleValue}`
}))