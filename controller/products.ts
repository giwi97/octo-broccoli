// @desc Get all the products
// @route GET /broco/api/products

const getProducts = ({ response }: { response: any }) => {

    response.body = {
        success: true,
        data: products
    }

}

export { getProducts }