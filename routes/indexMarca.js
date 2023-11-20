const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const{getMarcas,getMarca, postMarca, deleteMarca, patchMarca } = require("../controllers/marcaController");
const {validateFields} = require("../middlewares/validate-filelds");

router
.route('/')
.get(getMarcas)
.post([
  check('nombre','El nombre no puede estar vacio').not().isEmpty(),
  check('grupo','El grupo no puede estar vacio').not().isEmpty(),
  check('origen','El origen no puede estar vacio').not().isEmpty(),
  validateFields
],postMarca)

router
.route('/:id')
.get([
  check('id','No es un id válido de Mongo').isMongoId(),
  validateFields
], getMarca)
.delete([
  check('id','No es un id válido de Mongo').isMongoId(),
  validateFields
],deleteMarca)
.patch([
  check('id','No es un id válido de Mongo').isMongoId(),
  check('origen',"No puede tener numeros").isAlpha(),
  validateFields
], patchMarca)

module.exports=router;











