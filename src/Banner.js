import React, { Component } from 'react';
import './grid.css';
import './Betslip.css';
import Ionicon from 'react-ionicons';
import './normalize.css';
import { ItemList } from './ItemList';
import { players } from './players';

export class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBetslip: false,
            count: 0,
            total: 0
        }

        this.upCount = this.upCount.bind(this);
        this.showBetslip = this.showBetslip.bind(this);
        this.closeBetSlip = this.closeBetSlip.bind(this);
    }

    upCount() {
        this.setState((prevState, props) => ({
            count: prevState.count === 0 ? 1 : 0
        }));
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
            <div className="banner">
                <p className="stakes"><strong>{ this.state.total }</strong></p>
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
                        //<ItemList clickHandler={this.upCount} players={players} />
                        <section className="betslip">
                            <div className="item">
                                <div className="row">
                                    <div className="col span-1-of-4 logo">
                                    <Ionicon icon="ios-tennisball" color= "#e67e22"></Ionicon>
                                    </div>
                                    <div className="col span-2-of-4 event">
                                    <strong>{ players[0].player }</strong><br/>
                                    <small>[Location] [Time]</small>
                                    </div>
                                    <div className="col span-1-of-4">
                                    <button onClick={this.handleClick} className="odd">{ players[0].price }</button>
                                    </div>
                                </div>
                            </div>
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