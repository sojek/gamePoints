export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const addNewProduct = (name, price) => ({ type: ADD_NEW_ITEM, payload: { name, price } })

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const deleteProduct = id => ({ type: DELETE_PRODUCT, payload: { id } })

export const ADD_DISCOUNT = 'ADD_DISCOUNT'
export const addDiscount = (productId, buy, pay) => ({ type: ADD_DISCOUNT, payload: { productId, buy, pay } })

export const DELETE_DISCOUNT = 'DELETE_DISCOUNT'
export const deleteDiscount = id => ({ type: DELETE_DISCOUNT, payload: { id } })