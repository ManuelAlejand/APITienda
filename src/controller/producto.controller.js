const modeloProducto = require('../models/producto.model')

exports.buscar = async (req, res) => {
    let resultado = await modeloProducto.find({});
    console.log(resultado);

    if (resultado) {
        res.json({ "mensaje": resultado });
    } else {
        res.json({ "mensaje": "Hubo un error" });
    }
}

exports.findProducto =  async (req, res) => {
    let resultado = await modeloProducto.findOne({ "nombre": req.params.x });
    console.log(resultado)
    res.json(resultado)
    // if (resultado) {
    //     res.json({ "mensaje": resultado });
    // } else {
    //     res.json({ "mensaje": "Hubo un error, producto no encontrado... " })
    // }
};

exports.crearProducto =  async (req, res) => {
    const nuevoProducto ={
        "referencia": req.body.referenciaProducto,
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto,

    };
    let insercion = await modeloProducto.create(nuevoProducto);
    if(insercion)
        res.status(200).json({"mensaje": "Registro exitoso"})
    else
        res.status(404).json({"mensaje": "Se presento un error"})
};

exports.actualizarProducto =  async (req, res) => {
    const productoEditado ={
        "referencia": req.body.referenciaProducto,
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto,
    };
    let actualizar = await modeloProducto.create(productoEditado);
    if(actualizar)
        res.status(200).json({"mensaje": "Actualización exitosa"})
    else
        res.status(404).json({"mensaje": "Se presento un error"})
};
