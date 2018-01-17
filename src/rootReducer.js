import { combineReducers } from 'redux'

import { items } from './reducers/itemsReducer'
import { discounts } from './reducers/discountReducer'
import { cart } from './reducers/cartReducer'

export const rootReducer = combineReducers({
    items,
    discounts,
    cart,
})
