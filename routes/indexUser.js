const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const{deleteUser,getUser,getUsers,register,update} = require("../controllers/userController");
const {validateFields} = require("../middlewares/validate-filelds");
const {existUserEmail, existUserLogin} = require("../helpers/db-validators")

router
.route('/')
.get(getUsers)
.post([
  check('email','El email no puede estar vacio').not().isEmpty(),
  check('login','El login no puede estar vacio').not().isEmpty(),
  check('name','El nombre no puede estar vacio').not().isEmpty(),
  check('rol','El rol no puede estar vacio').not().isEmpty(),
  check('password','El password no puede estar vacio').not().isEmpty(),
  check('email').custom(existUserEmail),
  check('login').custom(existUserLogin),
  validateFields
],register)

router
.route('/:id')
.get([
  check('id','No es un id válido de Mongo').isMongoId(),
  validateFields
], getUser)
.delete([
  check('id','No es un id válido de Mongo').isMongoId(),
  validateFields
],deleteUser)
.put([
  check('id','No es un id válido de Mongo').isMongoId(),
  check('email').custom(existUserEmail),
  check('login').custom(existUserLogin),
  validateFields
], update)

module.exports=router;











