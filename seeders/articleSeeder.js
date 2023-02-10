const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
const {User} = require('../models/User')

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      author:faker.lorem.words(2),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
