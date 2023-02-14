const { User } = require("../models");
const { Comment } = require("../models");
const formidable = require('formidable');

// Display a listing of the resource.
async function index(req, res) {
  res.render('createUser')
}

// Display the specified resource.
async function show(req, res) {
  const idUser = await req.params.id;
  const userWithId = await User.findByPk(idUser);
  await res.json(userWithId);
}

// Show the form for creating a new resource
async function createOneUser(req, res) {
  const form = formidable({
    multiples:true,
    uploadDir:__dirname + '/../public/img/usersImgs',
    keepExtensions:true,
  })
  form.parse(req,async (err,fields,files)=>{
    const profileImage = files.profileImg.newFilename;
    console.log(fields)
    const newProfile = await User.create({ userName: fields.userName, password: fields.password , profileImg:profileImage});
    res.json(newProfile)
})}


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
  index,
  show,
  createOneUser,
  store,
  edit,
  update,
  destroy,
};
