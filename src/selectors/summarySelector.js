import { createSelector } from 'reselect'
import { flow as _flow } from 'lodash'

import { aggregatedCartSelector } from './aggregatedCartSelector'

const roundAmount = amount => Number(amount.toFixed(2))

const calculateOneProductPrice = product => {
    const { inCartAmount, points } = product

    if (product.discount) {
        const { get, _for } = product.discount
        const discountGroups = Math.floor(inCartAmount / _for)
        const reminder = inCartAmount % _for
        return (reminder + discountGroups * get) * points
    } else {
        return inCartAmount * points
    }
}

const productToPrice = (products) => products.map(calculateOneProductPrice)

const calculateCartPrice = productsPrice => productsPrice.reduce((acc, points) => acc + points, 0)

const calculateStandardPrice = products => products.reduce((total, product) => total + (product.inCartAmount * product.points), 0)

export const summarySelector = createSelector(aggregatedCartSelector, cart => ({
    basketPrice: _flow(productToPrice, calculateCartPrice, roundAmount)(cart),
    bonus: _flow(productToPrice, calculateCartPrice, roundAmount)(cart) - _flow(calculateStandardPrice, roundAmount)(cart),
}))