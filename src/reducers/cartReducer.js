import { omit as _omit } from 'lodash'

import { ADD_TO_CART, SET_PRODUCT_AMOUNT, RESET_GAME } from '../actions/actions'

export function cart(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const addToId = action.payload.id
            return { ...state, [addToId]: state[addToId] ? state[addToId] + 1 : 1 }
        case RESET_GAME: return {}
        case SET_PRODUCT_AMOUNT:
            const updateId = action.payload.id
            return action.payload.amount > 0
                ? { ...state, [updateId]: Number(action.payload.amount) }
                : _omit(state, updateId)
        default:
            return state
    }
}