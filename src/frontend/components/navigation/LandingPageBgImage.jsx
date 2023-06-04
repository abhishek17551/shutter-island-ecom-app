import { landing_image } from "../../../backend/assets"
import { Link } from "react-router-dom"

export const LandingPageBgImage = () => {
    
    return (
        <div className="full-wrapper flex-column">
           <div className="background-img-container">
               <img src={landing_image} alt="backgroung-image" className="responsive-img" />
                <div className="centered-content">
                    <p className="m-text">Sometimes you will never know the <strong>true value</strong> of a moment unit
                    it becomes <strong>a memory.</strong></p>
                    <p className="m-text">So we at <span className="text-italic font-weight-4">Shutter Island</span> aim at catering all your photography needs in a single marketplace at a reliable and discounted prices.</p> 
                    <Link to="/products"><button className="btn primary-btn mg-t-m">Shop Products</button></Link>
                </div>
           </div>
        </div>
    )
}