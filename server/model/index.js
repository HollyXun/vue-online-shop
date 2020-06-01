const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

//设置数据库表
const productSchema = Schema({
    id: {
        //ObjectId是一个特殊的数据类型，用来定义MongoDB文档的主键，用于标志存储数据的唯一性
        type: ObjectId
    },
    name: {
        type: String
    },
    images: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    //ref类似数据库中的外键，可以一对多存储
    manufacturer: {
        type: ObjectId,
        ref: "Manufacturer"
    }
});

const manufacturerSchema = Schema({
    id: {
        type: ObjectId
    },
    name: {
        type: String
    }
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer }