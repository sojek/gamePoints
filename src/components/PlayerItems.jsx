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

const Line = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
})

const LineColumn = glamorous.div(props => ({
    display: 'flex',
    textTransform: 'uppercase',
    flex: props.flex || 1,
    fontWeight: props.weight || 400,
    justifyContent: props.justifyContent || 'flex-end'
}))

const NewGameButton = glamorous.button({
    fontWeight: 'bold',
    width: '100%',
    background: 'black',
    color: 'white',
    margin: '1em 0',
    padding: '1em',
})

@connect(mapStateToProps, mapDispatchToProps)

export class PlayerItems extends PureComponent {
    render() {
        return (
            <Wrapper>
                <h3>Player items</h3>
                <List>
                    <Line>
                        <LineColumn justifyContent="flex-start" weight="bold">Item</LineColumn>
                        <LineColumn weight="bold">Qty</LineColumn>
                        <LineColumn weight="bold">Score</LineColumn>
                    </Line>
                    {this.props.cart.map(item =>
                    <Line key={item.id}>
                        <LineColumn justifyContent="flex-start">{item.name}</LineColumn>
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
                    <NewGameButton onClick={this.props.resetGame}>New Game</NewGameButton>
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