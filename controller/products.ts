import { RouterContext } from 'https://deno.land/x/oak/mod.ts'
import db from '../db/mongodb.ts'

const productsCollection = db.collection('products')

// @desc Get all the products
// @route GET /broco/api/products

const getProducts = async (ctx: RouterContext) => {

    const products = await productsCollection.find();
    ctx.response.body = products

}

// @route GET /broco/api/products/:id

const getProductsById = async (ctx: RouterContext) => {

    const id = ctx.params.id;
    const products = await productsCollection.findOne({_id: {$oid: id}})
    ctx.response.body = products

}

//@route POST /broco/api/products

const addProducts = async (ctx: RouterContext) => {

    const {value: {name, uprice, description}} = await ctx.request.body()

    const products: any = {
        name,
        uprice,
        description,
        date: new Date()
    };

    const id = await productsCollection.insertOne(products)
    console.log(id)

    products._id = id
    ctx.response.status = 201
    ctx.response.body = products

}

// @route PUT /broco/api/products/:id

const updateProducts = async (ctx: RouterContext) => {

    const id = ctx.params.id;
    const {value: {name, uprice, description}} = await ctx.request.body()
    const { modifiedCount } = await productsCollection.updateOne({_id: {$oid: id}}, {
        $set: {
            name,
            uprice,
            description
        }
    })

    if (!modifiedCount){
        ctx.response.status = 404
        ctx.response.body = {message: 'Product does not exists'}
        return
    }

    ctx.response.body = 'Successfully updated'

}

export { getProducts, addProducts, getProductsById, updateProducts }