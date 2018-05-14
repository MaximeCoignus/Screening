import React, { Component } from 'react';
import './grid.css';
import './Betslip.css';
import Ionicon from 'react-ionicons';
import './normalize.css';
import { players } from './players';
import { Item } from './Item';

export class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBetslip: false,
            hasBeenClicked:  false,
            count: 0
        }

        this.upCount = this.upCount.bind(this);
        this.showBetslip = this.showBetslip.bind(this);
        this.closeBetSlip = this.closeBetSlip.bind(this);
    }

    // Increment/Decrement the counter
    upCount() {
        if(this.state.hasBeenClicked === false) {
            this.setState({count: this.state.count+1, hasBeenClicked: true});
        } else if (this.state.hasBeenClicked === true) {
            this.setState({count : this.state.count-1, hasBeenClicked: false});
        }
        
    } 

    // Print Dropdown List
    showBetslip(e) {
        e.preventDefault();

        this.setState({ showBetslip: true }, () => {
            document.addEventListener('click', this.closeBetSlip);
        });
    }

    // Hide Dropdown List
    closeBetSlip(e) {
        if (this.dropdownMenu.contains(e.target)) {
            this.setState({ showBetslip: false }, () => {
                document.removeEventListener('click', this.closeBetSlip);
            });
        }
    }

    render() {
        
        const allPlayers = players.map((user, i) => {
            return <Item 
                clickHandler = { this.upCount } 
                key={i}
                player={players[i].player}
                price={players[i].price} />;
        })

        return (
            <div className="banner">
                <p className="stakes"><strong>{ this.state.count }</strong></p>
                <p className="heading">Bet Slip</p>
                {
                    this.state.showBetslip
                    ? (
                        <button 
                            onClick={this.closeBetSlip} 
                            className="arrow up"
                            ref={ (element) => {
                                this.dropdownMenu = element;
                            }}
                            id="up">▵</button>
                    )
                    : (
                        <button 
                            onClick={this.showBetslip} 
                            className="arrow down" 
                            id="down">▿</button>
                    )
                }
                {
                    this.state.showBetslip
                    ? (
                        <section className="betslip">
                            { allPlayers }
                        </section>
                    )
                    : (
                        null
                    )
                }
            </div>
        );
    }
}
