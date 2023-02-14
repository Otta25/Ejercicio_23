const { faker } = require("@faker-js/faker");
const {User} = require('../models')

faker.locale = "es";

module.exports = async () => {
  const user = [];
  for (let i = 0; i < 10; i++) {
    user.push({
      userName: faker.name.firstName(),
      password: faker.name.lastName(),
      profileImg:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    });
  }
  await User.bulkCreate(user);
  console.log("[Database] Se corrió el seeder de Articles.");
};
