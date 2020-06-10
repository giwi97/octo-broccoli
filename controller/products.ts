import { RouterContext } from 'https://deno.land/x/oak/mod.ts'
// @desc Get all the products
// @route GET /broco/api/products

const getProducts = (ctx: RouterContext) => {

    ctx.response.body = 'Get products'

}

export { getProducts }