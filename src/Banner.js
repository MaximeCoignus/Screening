import React, { Component } from 'react';
import './grid.css';
import './Betslip.css';
import Ionicon from 'react-ionicons';
import './normalize.css';
import { BettingSlip } from './BettingSlip';

export class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBetslip: false,
            greyButtons: [],
            clicked: false
        }

        this.emptyStakes = this.emptyStakes.bind(this);
        this.greyButtonClickHandler = this.greyButtonClickHandler.bind(this);
        this.showBetslip = this.showBetslip.bind(this);
        this.closeBetSlip = this.closeBetSlip.bind(this);
    }

    greyButtonClickHandler = index => event => {
        const { greyButtons } = this.state;
        greyButtons[index].status = 1 - greyButtons[index].status;
        if (greyButtons[index].status === 0) {
            this.setState({ clicked: false });
        } else {
            this.setState({ clicked: true });
        }
        this.setState({ greyButtons });
    }

    emptyStakes() {
        const { greyButtons } = this.state;
        greyButtons.map((g, i) => {
            g.status = 0;
        });
        this.setState({ greyButtons });
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

    componentDidMount() {
        const { greyButtons } = this.state;
        this.props.values.map(player => {
            greyButtons.push({status: 0, value: player.price })
        });
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {

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
                            <BettingSlip values={this.props.values}/>
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
