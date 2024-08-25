// const productModel = require('../models/productModel');
import * as productModel from '@src/models/product'

export const findAll = async () => {
    return productModel.findAll();
};