const Sequelize     = require('sequelize');
const usuario       = require('./../models').User;
module.exports = {
 create(req, res) {
    return usuario
        .create ({
             firstName: req.params.firstName,
             lastName: req.params.lastName,
             email: req.params.email
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return usuario.findAll({})
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return usuario.findAll({
         where: {
             email: req.params.email,
         }
     })
     .then(usuario => res.status(200).send(usuario))
     .catch(error => res.status(400).send(error))
  },
};