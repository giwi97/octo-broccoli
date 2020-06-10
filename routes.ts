import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts } from './controller/products.ts'
import { addProducts } from './controller/products.ts'

const router = new Router()

router
    .get('/broco/v1/products', getProducts)
    //.get('/broco/v1/products/:id', getSpecificProduct)
    .post('/broco/v1/products', addProducts)

export default router