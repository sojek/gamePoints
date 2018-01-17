export const ITEMS_FULFILLED = 'ITEMS_FULFILLED'
export const itemsFulfilled = (items) => ({ type: ITEMS_FULFILLED, payload: { items } })

export const DISCOUNTS_FULFILLED = 'DISCOUNTS_FULFILLED'
export const discountsFulfilled = (discounts) => ({ type: DISCOUNTS_FULFILLED, payload: { discounts } })

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = id => ({ type: ADD_TO_CART, payload: { id } })

export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT'
export const setProductAmount = (id, amount) => ({ type: SET_PRODUCT_AMOUNT, payload: { id, amount } })

export const UPDATE_RECEIPT = 'UPDATE_RECEIPT'
export const updateReceipt = (totalPrice, afterDiscount, saved) => ({ type: UPDATE_RECEIPT, payload: { totalPrice, afterDiscount, saved } })

export const RESET_GAME = 'RESET_GAME'
export const resetGame = () => ({ type: RESET_GAME, payload: {} })
