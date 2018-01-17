import React, { Component } from 'react'
import glamorous from 'glamorous'

import { List } from './components/List'
import { PlayerItems } from './components/PlayerItems'

const Wrapper = glamorous.div({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
})

class App extends Component {
    render() {
        return (
            <Wrapper>
                <List />
                <PlayerItems />
            </Wrapper>
        );
    }
}

export default App;
