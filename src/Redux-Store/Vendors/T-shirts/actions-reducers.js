import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

// Action Names & Variables ---------------------------------
const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS"
const CART_TOGGLE = "CART_TOGGLE"

// Reducer(s) -----------------------------------------------

const initialState = {
    products: [],
    cart_toggle : false
}

export default function tshirtReducer (state = initialState, action) {
    switch(action.type) {
        case DISPLAY_PRODUCTS :
            return {...state, products:action.payload}
        case CART_TOGGLE :
            return {...state, cart_toggle:action.payload}
        default:
            return state
    }
}

// Action Creators ------------------------------------------

function getProductData () {
    return action => {
        Axios.get('/products').then(response => {
            action({
                type: DISPLAY_PRODUCTS,
                payload: response.data
            })
        })
    }
}

function open_Close_Cart (val) {
    return dispatch => {
        dispatch  ({
            type: CART_TOGGLE,
            payload: val
        })
    }
}

// Custom hook(s) -------------------------------------------

export function useDataHook() {
    const dispatch = useDispatch()
    const items = useSelector(appState => appState.tshirtReducer.products)
    
    useEffect(() => {
        const fetch = () => dispatch(getProductData())
        fetch()
    }, [dispatch])

    return items 
}

export function useTogg () {
    const dispatch = useDispatch()
    const toggler = useSelector(appState => appState.tshirtReducer.cart_toggle)
    const toggle = val => dispatch(open_Close_Cart(val))
    
    return {toggler, toggle}
}