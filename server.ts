import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const port = 5000

const app = new Application()

const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/broco/v1/products', ({ response }: { response: any }) => {

    

})

console.log(`Server is running on port: ${port}`)

await app.listen({ port })