const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const{getMarcas,getMarca, postMarca, deleteMarca, putMarca } = require("../controllers/marcaController");
const {validateFields} = require("../middlewares/validate-filelds");
const {existMarca, canEditMarca} = require("../helpers/db-validators")

router
.route('/')
.get(getMarcas)
.post([
  check('nombre','El nombre no puede estar vacio').not().isEmpty(),
  check('grupo','El grupo no puede estar vacio').not().isEmpty(),
  check('origen','El origen no puede estar vacio').not().isEmpty(),
  check('origen',"No puede tener numeros").isAlpha(),
  check('nombre').custom(existMarca),
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
.put([
  check('id','No es un id válido de Mongo').isMongoId(),
  check('nombre').custom(canEditMarca),
  check('origen',"No puede tener numeros").isAlpha(),
  validateFields
], putMarca)

module.exports=router;











