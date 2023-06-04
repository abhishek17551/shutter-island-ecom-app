import './landing-page.css'
import {Link} from 'react-router-dom'
import { landing_image,ecom_logo,signup_icon, login_icon,nikkor_200mm } from "../../../../backend/assets"
import NavgationTop from "../../navigation/NavigationTop"
import { landingPageData } from '../../../../backend/db/landing-page-data'
import { LandingPageBgImage } from '../../navigation/LandingPageBgImage'

export const LandingPage = () => {
   
    return (
        <div>
            <NavgationTop/>
            <main className="wrapper flex-column">
            <LandingPageBgImage/>

            <div className="overlay-card-container flex-column">
                    {
                        landingPageData.map(({title,description,image,categoryName,buttonText},index) => (
                           (index%2===0) ? (
                                <div className="flex-sb mg-t-s mg-l-m">
                                    <div className="overlay-card pointer border-radius-sm flex-se">
                                    <img src={image} alt={title} className="responsive-image"/>
                                        <div className="overlay-text">
                                            <p className="m-text">{title}</p>
                                        </div>
                                    </div>
                                    <div className="flex-center-column mg-r-m">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">{buttonText}</button></a>
                                    </div>
                                </div>
                           ) : (
                            <div className="flex-sb mg-t-s mg-r-m">
                                <div className="flex-center-column mg-l-m">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <a href="../products/products-listing-1.html"><button className="btn primary-btn mg-t-xs">{buttonText}</button></a>
                                </div>
                                <div className="overlay-card pointer border-radius-sm flex-se">
                                    <img src={image} alt={title} className="responsive-image"/>
                                    <div className="overlay-text">
                                        <p className="m-text">{title}</p>
                                    </div>
                                </div>
                            </div>
                           )
                        ))
                    }
            </div>


            </main>
        </div>
    )
}