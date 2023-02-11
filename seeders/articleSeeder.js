const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
const { User } = require("../models/User");
let noticias = require("../seeders/arrayNoticias");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  for (let i = 0; i < noticias.length; i++) {
    articles.push({
      title: noticias[i].titlo,
      content: noticias[i].parrafo,
      userId: 1,
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
