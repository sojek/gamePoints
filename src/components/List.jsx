import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addToCart, setProductAmount } from '../actions/actions'
import { aggregatedCartSelector } from '../selectors/aggregatedCartSelector'
import { ItemCollection } from '../models/Item'
import { ItemListElement } from './ItemListElement'

export const ListComponent = glamorous.div({
    flex: 3,
})

export const ListWrapper = glamorous.ul({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 23',
    margin: 0,
})

const mapStateToProps = (state) => {
    return ({
        items: aggregatedCartSelector(state)
    });
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addToCart, setProductAmount }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export class List extends PureComponent {
    render() {
        return (
            <ListComponent>
                <h4>Items</h4>
                <ListWrapper>
                    {this.props.items.map(item => <ItemListElement
                        key={item.id}
                        item={item}
                        addToCart={() => this.props.addToCart(item.id)}
                        setProductAmount={(amount) => this.props.setProductAmount(item.id, amount)}
                    />)}
                </ListWrapper>
            </ListComponent>
        );
    }
}

List.propTypes = {
    products: PropTypes.shape(ItemCollection)
}