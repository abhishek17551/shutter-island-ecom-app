import { addressActionTypes } from "../utils/constants";

const {
    DISPLAY_ADDRESSES,
    SET_ADDRESS_DETAILS,
    EDIT_ADDRESS_DETAILS,
    ADD_NEW_ADDRESS,
    REMOVE_ADDRESS,
    RESET_ADDRESS_FORM,
    SHOW_ADDRESS_MODAL,
    SET_DUMMY_ADDRESS,
    ZIPCODE_ERROR,
    MOBILE_ERROR,
    SET_SELECTED_ADDRESS_ID,
} = addressActionTypes;

export const initialAddressInput = {
    _id : "",
    name : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    mobile : ""
}

export const initialAddressState = {
    addresses : [],
    showAddressModal : false,
    addressFormData : initialAddressInput,
    addressFormError : {
        zipcodeError : false,
        mobileError : false
    },
    selectedAddress : null,
}

export const addressReducer = (state,{type,payload}) => {
    switch (type) {
        case DISPLAY_ADDRESSES : 
            return {
                ...state,
                addresses : payload,
                selectedAddress : payload ? payload[0]?._id : null,
            }
        case SHOW_ADDRESS_MODAL : 
            return {...state,showAddressModal:payload}
        case SET_ADDRESS_DETAILS :
            return {
                ...state,
                addressFormData : {
                    ...state.addressFormData,
                    [payload.name]:payload.value
                }
            }
        case EDIT_ADDRESS_DETAILS :
            return { ...state, addressFormData: payload }
        case ADD_NEW_ADDRESS :
            return { ...state, addresses: payload }
        case SET_DUMMY_ADDRESS :
            return { ...state, addressFormData: payload }
        case REMOVE_ADDRESS :
            return { ...state, addresses: payload }
        case RESET_ADDRESS_FORM :
            return { ...state, addressFormData: payload }
        case ZIPCODE_ERROR :
            return {...state,
                addressFormError : {
                    ...state.addressFormError,
                    zipcodeError:payload.zipcodeError
                }
            }
        case MOBILE_ERROR : 
            return {
                ...state,
                addressFormError : {
                    ...state,addressFormError,
                    mobileError:payload.mobileError
                }
            }
        case SET_SELECTED_ADDRESS_ID : 
            return {...state,selectedAddress:payload}
        default : return state;
    }
}