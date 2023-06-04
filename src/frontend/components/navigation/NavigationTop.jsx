import {Link} from 'react-router-dom'
import { ecom_logo } from '../../../backend/assets'
import './NavigationTop.css'


export default function NavgationTop(){
    return  <nav className="navbar flex-sb">
    <div>
        <Link to="/"><img src={ecom_logo} alt="Shutter Island logo" className=" mg-xs pointer border-radius-sm"/></Link>
    </div>
    <div>
        <div className="search flex-center">
            <input type="text" name="search" placeholder="What's on your mind?" className="border-radius-sm"></input>
            <button className="btn light-btn mg-l-s">Search</button>
        </div>
    </div>
    <div className="flex-center">
        {/* <Link to="/category"><button className="btn secondary-btn">View Products</button></Link> */}
        <Link to='/mockman'><button className="btn secondary-btn">Mockman</button></Link>
        <Link to="/signup"><button className="btn secondary-btn mg-s">Sign Up</button></Link>
        <Link to="/login"><button className="btn primary-btn mg-s">Login</button></Link>
        <Link to="/checkout"><button className="btn primary-btn mg-s">Checkout</button></Link>
        <div className="notification-badge-container mg-m">
            <Link to='/wishlist'><i className="far fa-heart pointer"></i></Link>
            {/* <div className="notification-badge flex-center xs-text">
                <span>8</span>
            </div> */}
        </div>
       
        <div className="notification-badge-container mg-m">
        <Link to='/cart'><i className="fas fa-shopping-cart pointer"></i></Link>
            {/* <div className="notification-badge flex-center xs-text">
                <span>7</span>
            </div> */}
        </div>

    </div>
</nav>
}