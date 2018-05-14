import React, { Component } from 'react';
import './Betslip.css';
import { Item } from './Item';

export class ItemList extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clickHandler();
    }

    render() {
        const allPlayers = this.props.players.map((user, i) => {
            return <Item 
                clickHandler = { this.handleClick } 
                key={i}
                player={this.props.players[i].player}
                price={this.props.players[i].price} />;
        })
        return (
            <section className="betslip">
                { allPlayers }
            </section>
        );
    }    
}