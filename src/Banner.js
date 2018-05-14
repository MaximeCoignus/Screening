import React, { Component } from 'react';
import './grid.css';
import './Betslip.css';
import Ionicon from 'react-ionicons';
import './normalize.css';
import { players } from './players';
import { Item } from './Item';
import { Price } from './Price';

export class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBetslip: false,
            hasBeenClicked:  false,
            count: 0,
            greyButtons: [
                {status: 0, value: players[0].price },
                {status: 0, value: players[1].price},
                {status: 0, value: players[2].price},
                {status: 0, value: players[3].price}
            ]
        }

        this.emptyStakes = this.emptyStakes.bind(this);
        this.greyButtonClickHandler = this.greyButtonClickHandler.bind(this);
        this.upCount = this.upCount.bind(this);
        this.showBetslip = this.showBetslip.bind(this);
        this.closeBetSlip = this.closeBetSlip.bind(this);
    }

    greyButtonClickHandler = index => event => {
        const { greyButtons } = this.state;
        greyButtons[index].status = 1 - greyButtons[index].status;
        this.setState({ greyButtons });
    }

    emptyStakes() {
        const { greyButtons } = this.state;
        greyButtons.map((g, i) => {
            g.status = 0;
        });
        this.setState({ greyButtons });
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
                odd={players[i].odd} />;
        })

        const { greyButtons } = this.state;

        return (
            <div className="banner">
                <p className="stakes"><strong>{ greyButtons.reduce((acc, e) => acc + e.status, 0) }</strong></p>
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
                        <div>
                            <section className="betslip">
                                { allPlayers }
                            </section>
                            <section className="multi-stake">
                                <div className="result">
                                    <ul>
                                        {
                                            greyButtons.map((g, i) => {
                                                return <li key={i}><button  onClick={ this.greyButtonClickHandler(i)} >{ g.value }</button></li>
                                            })
                                        }
                                        
                                    </ul>
                                    <div className="clear">
                                        <button onClick={this.emptyStakes} ><Ionicon icon="ios-trash" color= "#e67e22"></Ionicon></button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        );
    }
}
