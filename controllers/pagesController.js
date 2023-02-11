/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article } = require("../models");
const { User } = require("../models");



async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showContact(req, res) {
  res.render("contact");
}


async function show(req, res) {
  const titleValue = await req.params.id;
  const article = await Article.findOne({where:{ title: titleValue }}, { include: User });
  await res.render('article',{article});
}

async function showAboutUs(req, res) {
  res.render('aboutUs');
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  show
};
