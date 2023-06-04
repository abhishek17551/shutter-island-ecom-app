import { useContext, useState } from 'react'
import './product-listing.css'
import { ProductContext } from '../../../context/ProductContext'
export const FilterSection = () => {
    const [categories, setCategories] = useState([
        "displaylights",
        "accessories",
        'lens',
        "camera"
      ]);
   const ratingArray = [2,3,4]
    const {products} = useContext(ProductContext)
    return (
        
            <aside className="sidebar flex-column-sidebar">
            <div className="mg-t-m mg-xs">
                <div className="flex-sb">
                    <p>Filters</p>
                    <a href="#">Clear</a>
                </div>
                <div className="mg-t-m">
                    <h4>Price</h4>
                    <div className="flex-se">
                        <p className="gray-txt">50K</p>
                        <p className="gray-txt">200K</p>
                        <p className="gray-txt">500K</p>
                    </div>
                    <div className="flex-center">
                        <input type="range" min="1" max="400" value="50" className="slider"/>
                    </div>
                </div>

                <div className="mg-t-m">
                    <h4>Category</h4>
                    <div className="checkbox-input mg-l-l mg-t-s padding-s">
                    {categories.map((category, index) => (
                        <div className="checkbox mg-xxs">
                            <label for="checkbox">
                                <input type="checkbox" name="categories" value={category} checked={categories.includes(category)}/>
                                {category}
                            </label>
                        </div>
                    ))}
                    </div>
                </div>
                <div>
                    <h4>Ratings</h4>
                    <div className="radio-input  padding-s mg-l-l mg-t-s">
                        <div className="radio">
                            <label for="radio-1">
                                <input type="radio" className="radio-1" checked/>
                                4 Stars & above
                            </label>     
                        </div>
                        <div className="radio mg-t-xs">
                            <label for="radio-2">
                                <input type="radio" className="radio-2"/>
                                3 Stars & above
                            </label>
                        </div>
                        <div className="radio mg-t-xs">
                            <label for="radio-3">
                                <input type="radio" className="radio-3" />
                                2 Stars & above
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Sort By</h4>
                    <div className="radio-input  padding-s mg-l-l mg-t-s">
                        <div className="radio">
                            <label for="radio-1">
                                <input type="radio" className="radio-1" checked/>
                                Price - Low to High
                            </label>     
                        </div>
                        <div className="radio mg-t-s">
                            <label for="radio-2">
                                <input type="radio" className="radio-2"/>
                                Price - High to Low
                            </label>
                        </div>
                    
                    </div>
                </div>
            </div>
        </aside>
        
    )
}