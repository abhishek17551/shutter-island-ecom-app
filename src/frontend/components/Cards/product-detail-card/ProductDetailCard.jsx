import { Link } from "react-router-dom"
import './product-detail-card.css'

export const ProductDetailCard = ({product}) => {
    const {_id, title, categoryName, image, price, discount, discountedprice, rating,brand,description} = product

    return (
        <>
            <div className="dismiss-card pointer">
                <img src={image} alt={title} className="responsive-image mg-xs" />
                <div className="dismiss-card-description flex-sb-column">
                    <h3>{brand}</h3>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p><span className="font-weight-3">Price : </span>Rs {price}</p>
                    <p><span className="font-weight-3">Discount : </span>{discount}%</p>
                    <p><span className="font-weight-3">Final Price : </span>Rs {discountedprice}</p>
                    <p><span className="font-weight-3">Rating : </span> {rating}</p>
                    <Link to="/products"><button className="btn primary-btn mg-t-m">Go To Products</button></Link>
                </div>
            </div>
        </>
    )
}