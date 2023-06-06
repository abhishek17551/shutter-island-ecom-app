import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../../context/ProductContext"
import { ProductDetailCard } from "../../Cards/product-detail-card/ProductDetailCard"
import NavgationTop from "../../navigation/NavigationTop"

export const ProductDetail = () => {
    const {productId} = useParams()

    const {products} = useContext(ProductContext)

    function getProductDetails(productItems, productId) {
        return productItems.find((product) => product._id === productId)
    }

    const product = getProductDetails(products,productId)
    return (
        <>
        <NavgationTop/>
        <main className="wrapper">
            <div className="page-wrapper">
                <h2>Product Details</h2>
                <div className="flex-center flex-row-wrap mg-t-l">
                <ProductDetailCard product={product} key={product._id}/>
                </div>
            </div>
        </main>
        </>
    )
}