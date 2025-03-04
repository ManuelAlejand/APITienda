const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: [Number, "La referencia debe ser numerica "],
        required: [true, "El campo debe ser obligatorio"]
    },
    
    nombre: {
        type: [String, "El nombre debe ser texto"],
        required: [true, "El nombre debe ser obligatorio"]
    },
    precio: {
        type: [Decimal128, "El precio debe tener decimales"],
        default: 0.0,
        min: [0,0, "Los precios no pueden ser negativos "]
    }
}, {versionKey: false} )

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;