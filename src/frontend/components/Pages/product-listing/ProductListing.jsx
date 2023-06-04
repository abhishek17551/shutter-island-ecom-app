import './product-listing.css'
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../../context/ProductContext"

import { FilterSection } from './filterSection'
import { ProductCard } from '../../Cards/product-card/ProductCard'
import NavgationTop from '../../navigation/NavigationTop'



export const ProductListing = () => {
   const {products} = useContext(ProductContext)

    return (
        <div>
            <NavgationTop/>
            <main className="wrapper">
                <FilterSection/>
                <div className="page-wrapper">
                    <h3>Showing All Products</h3>
                    <div className="flex-center flex-row-wrap mg-t-s">
                        <div className="flex-center flex-row-wrap mg-t-s mg-s">
                        {products.length > 0 ? (
                            products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                            ))
                            ) : (
                                <p>No products available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}