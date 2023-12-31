const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const{getPaises,getPais, postPais, deletePais, putPais } = require("../controllers/paisController");
const {validateFields} = require("../middlewares/validate-filelds");
const {existPais} = require("../helpers/db-validators")

router
.route('/')
.get(getPaises)
.post([
  check('nombre','El nombre no puede estar vacio').not().isEmpty(),
  check('nombre').custom(existPais),
  check('numHabitantes','El numero de habitantes no puede estar vacio').not().isEmpty(),
  check('continente','El continente no puede estar vacio').not().isEmpty(),
  check('numHabitantes','Debe ser solo numerico').isNumeric(),
  validateFields
],postPais)

router
.route('/:id')
.get([
  check('id','Id no valido en Mongo').isMongoId(),
  validateFields
],getPais)
.delete([
  check('id','Id no valido en Mongo').isMongoId(),
  validateFields
],deletePais)
.put([
  check('id','Id no valido en Mongo').isMongoId(),
  check('nombre','El nombre no puede estar vacio').not().isEmpty(),
  check('nombre').custom(existPais),
  check('numHabitantes','El numero de habitantes no puede estar vacio').not().isEmpty(),
  check('continente','El continente no puede estar vacio').not().isEmpty(),
  check('numHabitantes','Solo puede estar formado por numeros').isNumeric(),
  check('numHabitantes','No puede ser negativo').isInt({min:0}),
  validateFields
], putPais)

module.exports=router;











