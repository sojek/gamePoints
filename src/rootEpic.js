import { combineEpics } from 'redux-observable'

import { itemsEpic } from './epics/itemsEpic'
import { discountEpic } from './epics/discountEpic'
import { container } from './container'

export const rootEpic = combineEpics(
    itemsEpic(container.get('ITEMS_REPOSITORY')),
    discountEpic(container.get('DISCOUNT_REPOSITORY')),
)