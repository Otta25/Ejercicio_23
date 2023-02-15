function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/usuarios/iniciar-sesion");
  }
}

module.exports = isAuthenticated;
