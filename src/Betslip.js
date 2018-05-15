import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import './Betslip.css';
import './normalize.css';
import { players } from './players';
import { Banner } from './Banner';

class Betslip extends Component {
    render() {
        return (
            <div>
                <Banner values={players} />
            </div>
        );
    }
}

export default Betslip;