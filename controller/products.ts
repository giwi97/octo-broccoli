import { RouterContext } from 'https://deno.land/x/oak/mod.ts'
import db from '../db/mongodb.ts'

const productsCollection = db.collection('products')

// @desc Get all the products
// @route GET /broco/api/products

const getProducts = async (ctx: RouterContext) => {

    const products = await productsCollection.find();
    ctx.response.body = products

}

// @route POST /broco/api/products

const addProducts = async (ctx: RouterContext) => {

    const products = await productsCollection.find();
    ctx.response.body = products

}

export { getProducts }
export { addProducts }