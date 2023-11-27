const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {getTiendas, getTienda, postTienda, deleteTienda, putTienda} = require('../controllers/tiendaController');
const {validateFields} = require('../middlewares/validate-filelds');

router
.route('/')
.get(getTiendas)
.post([
    check("marca","No puede estar vacia").not().isEmpty(),
    check("ciudad","No puede estar vacia").not().isEmpty(),
    check("calle","No puede estar vacia").not().isEmpty(),
    check("numero","No puede estar vacia").not().isEmpty(),
    check("numero", "Solo puede ser numerico").isNumeric(),
    check("numero","No puede ser un numero negativo").isInt({min:0}),
    validateFields
],postTienda)

router
.route('/:id')
.get([
    check('id','Id no valido en Mongo').isMongoId(),
    validateFields
], getTienda)
.delete([
    check('id','Id no valido en Mongo').isMongoId(),
    validateFields
], deleteTienda)
.put([
    check("numero","No puede ser un numero negativo").isInt({min:0}),
    check('id','Id no valido en Mongo').isMongoId(),
    validateFields
], putTienda)

module.exports = router;