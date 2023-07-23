import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import { initialProductState, productReducer } from "../reducers/productReducer";
import { filterActionTypes } from "../utils/constants";
import { getCategoriesService, getProductByIdService, getProductsService } from "../services/productsService";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [productState,productDispatch] = useReducer(productReducer, initialProductState);

    const [loading,setLoading] = useState(false);
    const [showFilter,setShowFilter] = useState(false);

    const cardTimerId = useRef();

    const {DISPLAY_PRODUCTS, DISPLAY_CATEGORIES, GET_PRODUCT_DETAILS} = filterActionTypes;

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await getProductsService();
        const {status, data:{products}} = response;
        if(status === 200){
          productDispatch({
            type : DISPLAY_PRODUCTS,
            payload : products
          })
        }
      }
      catch (error) {
        console.error(error)
      }
      finally {
        setLoading(false)
      }
    };

    const getCategories = async () => {
      setLoading(true);
      try {
        const response = await getCategoriesService();
        const {status, data:{categories}} = response;
        if(status === 200){
          productDispatch({
            type : DISPLAY_CATEGORIES,
            payload : categories
          })
        }
      }
      catch(error) {
        console.error(error);
      }
      finally {
        setLoading(false)
      }
    };

    const getProductById = async (productId) => {
      setLoading(true);
      try {
        const response = await getProductByIdService(productId);
        const {status, data:{product}} = response;
        if(status === 200) {
          productDispatch({
            type : GET_PRODUCT_DETAILS,
            payload : product
          })
        }
      }
      catch(error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    };

    const toggleFilter = () => {
      setShowFilter((showFilter) => !showFilter)
    };

    const handleButtonsClick = (delay, callback, ...args) => {
      clearTimeout(cardTimerId.current);
      cardTimerId.current = setTimeout(() => {
        callback(...args)
      },delay)
    };

    useEffect(() => {
      getProducts();
      getCategories();
    },[]);

    const filteredBySearch = productState.searchInput ? productState.products.filter((product) => 
      product.title.toLowerCase().includes(productState.searchInput.toLowerCase())) : productState.products;

    const filteredByCategory = productState.categoryInput.length > 0 ? filteredBySearch.filter((product) =>                               
      productState.categoryInput.some((categoryType) => product.category === categoryType)) : filteredBySearch;

    const filteredByPrice = productState.sortPriceInput ? filteredByCategory.sort((product1,product2) => 
      productState.sortPriceInput === 'hightolow' 
        ? product2.discountedprice - product1.discountedprice 
        : product1.discountedprice - product2.discountedprice 
    ) : filteredByCategory;

    const filteredByRating = filteredByPrice.filter((product) => product.rating <= productState.ratingRange);

    return (
      <ProductContext.Provider
        value={{
          productState,
          productDispatch,
          loading,
          showFilter,
          toggleFilter,
          filteredByRating,
          getProductById,
          handleButtonsClick
        }}
      >
        {children}
      </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)