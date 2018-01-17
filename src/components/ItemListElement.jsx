import React from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import { Item } from '../models/Item'


export const ListElement = glamorous.li({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23,
    width: 120,
    height: 120,
    margin: 5,
    border: "1px solid #383838",
    cursor: "pointer"
})

export const Bonus = glamorous.div({
    fontSize: 12,
})

export function ItemListElement(props) {
    return (
        <ListElement onClick={props.addToCart}>
            <div>{props.item.name}</div>
            {props.item.discount &&<Bonus>bonus {props.item.discount._for} for {props.item.discount.get}</Bonus>}
        </ListElement>
    )
}

Item.propTypes = {
    item: PropTypes.shape(Item),
    addToCart: PropTypes.func.isRequired,
}