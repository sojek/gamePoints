import { createSelector } from 'reselect'
import { reduce as _reduce, find as _find } from 'lodash'

import { itemsSelector, discountSelector, cartSelector } from './stateSelectors'


const aggregator = (items, discounts, cart) => _reduce(items, (acc, item, id) => {
    return [
        ...acc,
        {
            ...item,
            id,
            discount: _find(discounts, ['itemId', id]),
            inCartAmount: cart[id] || 0,
        }
    ]}, [])

export const aggregatedCartSelector = createSelector([
    itemsSelector,
    discountSelector,
    cartSelector,
], aggregator)