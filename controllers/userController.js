const { User } = require("../models");
const { Comment } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Display a listing of the resource.
async function showCreate(req, res) {
  res.render("createUser");
}

async function showLogIn(req, res) {
  res.render("logInUser");
}

// Display the specified resource.
async function show(req, res) {
  const idUser = await req.params.id;
  const userWithId = await User.findByPk(idUser);
  await res.json(userWithId);
}

async function registerUser(req, res) {
  const passwordParaHashear = req.body.password;
  const passwordHasheado = await bcrypt.hash(passwordParaHashear, 10);
  await User.findOrCreate({
    where: { username: req.body.username },
    defaults: { username: req.body.username, password: passwordHasheado },
  });
  res.redirect("/");
}

const logInUser = passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/usuarios/iniciar-sesion",
});

// Show the form for creating a new resource
// async function createOneUser(req, res) {
//   const form = formidable({
//     multiples: true,
//     uploadDir: __dirname + "/../public/img/usersImgs",
//     keepExtensions: true,
//   });
//   form.parse(req, async (err, fields, files) => {
//     const profileImage = files.profileImg.newFilename;
//     console.log(fields);
//     const newProfile = await User.create({
//       username: fields.username,
//       password: fields.password,
//       profileImg: profileImage,
//     });
//     res.json(newProfile);
//   });
// }

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  showCreate,
  showLogIn,
  show,
  logInUser,
  registerUser,
  store,
  edit,
  update,
  destroy,
};
