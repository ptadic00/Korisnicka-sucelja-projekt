import React from 'react'

import AllSongs from './all_songs'
import RockSongs from './rock'
import Zabavno from './zabavno'
import Strano from './strano'
import Dalmatinske from './dalmatinske'

import styles from './style.module.css'

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
            <div className={styles.filtersContainer}>
                <ul className={styles.filters}>
                    <li onClick={this.handleClick.bind(this, 'all_songs')} className={styles.filter1}>Sve pjesme</li>
                    <li onClick={this.handleClick.bind(this, 'rock')} className={styles.filter2}>PopRock</li>
                    <li onClick={this.handleClick.bind(this, 'zabavno')} className={styles.filter3}>Zabavno</li>
                    <li onClick={this.handleClick.bind(this, 'dalmatinske')} className={styles.filter4}>Dalmatinske</li>
                    <li onClick={this.handleClick.bind(this, 'strano')} className={styles.filter5}>Strano</li>
                </ul>
                {this._renderSubComp()}
            </div>
        );
    }
}

export default App;