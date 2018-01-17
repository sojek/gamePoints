import { ITEMS_FULFILLED } from '../actions/actions'

export function items(state = {}, action) {
    switch (action.type) {
        case ITEMS_FULFILLED:
            return action.payload.items
        default:
            return state
    }
}