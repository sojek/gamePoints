import { combineEpics } from 'redux-observable'

import { itemsFulfilled } from '../actions/actions'
import { ADD_NEW_ITEM } from '../actions/updateDataActions'

export function itemsEpic(itemRepository) {
    const items$ = () => itemRepository.getStream()
        .map(itemsFulfilled)

    const addItemEpic = action$ => action$
        .ofType(ADD_NEW_ITEM)
        .do(({ payload }) => itemRepository.add(payload.name, payload.points))
        .ignoreElements()

    return combineEpics(items$, addItemEpic)
}