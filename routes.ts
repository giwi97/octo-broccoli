import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, addProducts, getProductsById } from './controller/products.ts'

const router = new Router()

router
    .get('/broco/v1/products', getProducts)
    .get('/broco/v1/products/:id', getProductsById)
    .post('/broco/v1/products', addProducts)

export default router