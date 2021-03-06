import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import './Betslip.css';
import './grid.css';

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="row">
                    <div className="col span-1-of-4 logo">
                    <Ionicon icon="ios-tennisball" color= "#e67e22"></Ionicon>
                    </div>
                    <div className="col span-2-of-4 event">
                    <strong>{ this.props.player }</strong><br/>
                    <small>London 16:30</small>
                    </div>
                    <div className="col span-1-of-4">
                    <p className="odd">{ this.props.odd }</p>
                    </div>
                </div>
            </div>
        );
    }
}
