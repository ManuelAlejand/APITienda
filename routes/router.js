const exp = require('express')
const router = exp.Router();

const controladorProducto = require('../src/controller/producto.controller')
router.get('/productos',  controladorProducto.buscar );
router.get('/productos/:x', controladorProducto.findProducto);
router.post('/productos', controladorProducto.crearProducto);
router.put('/productos/:x', controladorProducto.actualizarProducto);

module.exports = router;