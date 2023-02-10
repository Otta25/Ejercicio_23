const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];
  for (let i = 0; i < 10; i++) {
    comments.push({
      content: faker.lorem.paragraphs(2),
      userId: 1,
      articleId: 2,
    });
  }
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comentarios.");
};
