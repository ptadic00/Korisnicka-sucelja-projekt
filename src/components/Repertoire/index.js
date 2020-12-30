import React from 'react'

import AllSongs from './all_songs'
import RockSongs from './rock'
import Zabavno from './zabavno'
import Strano from './strano'
import Dalmatinske from './dalmatinske'

class App extends React.Component {
    constructor(){
        super();
        this.state = {render:''}
    }
    handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});        
    }
    _renderSubComp(){
        switch(this.state.render){
            case 'all_songs': return <AllSongs/>
            case 'rock' : return <RockSongs/>
            case 'zabavno' : return <Zabavno/>
            case 'dalmatinske' : return <Dalmatinske/>
            case 'strano' : return <Strano/>
            default: return <AllSongs/>
        }
    }
    render() {
        return (
            <div className="App">
                <ul style={{display: 'inline'}}>
                    <button onClick={this.handleClick.bind(this, 'all_songs')}>Sve pjesme</button>
                    <button onClick={this.handleClick.bind(this, 'rock')}>PopRock</button>
                    <button onClick={this.handleClick.bind(this, 'zabavno')}>Zabavno</button>
                    <button onClick={this.handleClick.bind(this, 'dalmatinske')}>Dalmatinske</button>
                    <button onClick={this.handleClick.bind(this, 'strano')}>Strano</button>
                </ul>
                {this._renderSubComp()}
            </div>
        );
    }
}

export default App;