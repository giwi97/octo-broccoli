import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts } from './controller/products'

const router = new Router()

router.get('/broco/v1/products', getProducts())

export default router