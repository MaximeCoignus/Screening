import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import './Betslip.css';
import './grid.css';

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clickHandler();
        console.log(this.props.count);
    }

    render() {
        return (
            <div className="item">
                <div className="row">
                    <div className="col span-1-of-4 logo">
                    <Ionicon icon="ios-tennisball" color= "#e67e22"></Ionicon>
                    </div>
                    <div className="col span-2-of-4 event">
                    <strong>{ this.props.player }</strong><br/>
                    <small>[Location] [Time]</small>
                    </div>
                    <div className="col span-1-of-4">
                    <button onClick={this.handleClick} className="odd">{ this.props.price }</button>
                    </div>
                </div>
            </div>
        );
    }
}