import React, { PureComponent } from 'react';
import glamorous from 'glamorous'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { aggregatedCartSelector } from '../selectors/aggregatedCartSelector'
import { summarySelector } from '../selectors/summarySelector'
import { Item } from '../models/Item'
import { resetGame } from '../actions/actions'

const mapStateToProps = (state) => ({
    cart: aggregatedCartSelector(state),
    summary: summarySelector(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ resetGame }, dispatch)

const Wrapper = glamorous.div({
    flex: 1,
})

const List = glamorous.ul({
    listStyle: 'none',
    padding: 0,
})

export const Line = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
})

export const LineColumn = glamorous.div(props => ({
    display: 'flex',
    flex: props.flex || 1,
    justifyContent: props.justifyContent || 'flex-end'
}))

@connect(mapStateToProps, mapDispatchToProps)

export class PlayerItems extends PureComponent {
    render() {
        return (
            <Wrapper>
                <h4>Player items</h4>
                <List>
                    <Line>
                        <LineColumn flex="2" justifyContent="flex-start">Item</LineColumn>
                        <LineColumn>Qty</LineColumn>
                        <LineColumn>Score</LineColumn>
                    </Line>
                    {this.props.cart.map(item =>
                    <Line>
                        <LineColumn flex="2" justifyContent="flex-start">{item.name}</LineColumn>
                        <LineColumn>{item.inCartAmount}</LineColumn>
                        <LineColumn>{item.points}</LineColumn>
                    </Line>)}
                </List>
                <div>
                    <h3>Bonuses</h3>
                    {this.props.summary.bonus}
                </div>
                <div>
                    <h3>Total</h3>
                    {this.props.summary.basketPrice}
                </div>
                <div>
                    <button onClick={this.props.resetGame}>New Game</button>
                </div>
            </Wrapper>
        );
    }
}

PlayerItems.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape(Item)
    ),
    receipt: PropTypes.shape({
        basketPrice: PropTypes.number.isRequired,
        bonus: PropTypes.number.isRequired,
    })
}