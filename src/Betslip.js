import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import './Betslip.css';
import './normalize.css';
import { players } from './players';
import { ItemList } from './ItemList';
import { Price } from './Price';

class Betslip extends Component {
    constructor() {
        super();

        this.state = {
            showBetslip: false
        }

        this.showBetslip = this.showBetslip.bind(this);
        this.closeBetSlip = this.closeBetSlip.bind(this);
    }

    showBetslip(e) {
        e.preventDefault();

        this.setState({ showBetslip: true }, () => {
            document.addEventListener('click', this.closeBetSlip);
        });
    }

    closeBetSlip(e) {
        if (this.dropdownMenu.contains(e.target)) {
            this.setState({ showBetslip: false }, () => {
                document.removeEventListener('click', this.closeBetSlip);
            });
        }
    }

    render() {
        return (
            <div className="component">
                <section className="dropdown">
                    <div className="banner">
                        <p className="stakes"><strong>0</strong></p>
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
                                <button onClick={this.showBetslip} className="arrow down" id="down">▿</button>
                            )
                        }
                    </div>
                </section>
                {
                    this.state.showBetslip
                    ? (
                        <div>
                            <ItemList players={players} />
                            <section className="multi-stake">
                                <div className="result">
                                    <ul>
                                        <Price price={players[0].price} />
                                        <Price price={players[1].price} />
                                        <Price price={players[2].price} />
                                        <Price price={players[3].price} />
                                    </ul>
                                    <div className="clear">
                                    <button><Ionicon icon="ios-trash" color= "#e67e22"></Ionicon></button>
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

export default Betslip;