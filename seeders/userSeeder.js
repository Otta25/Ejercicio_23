const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const user = [];
  for (let i = 0; i < 10; i++) {
    user.push({
      username: faker.name.firstName(),
      password: await bcrypt.hash("root", 8),
      profileImg:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    });
  }
  await User.bulkCreate(user);
  console.log("[Database] Se corrió el seeder de Articles.");
};
