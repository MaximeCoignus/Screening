import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { Item } from './Item';

export class BettingSlip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="betslip">
                {
                    this.props.values.map((player, i) => {
                        return <Item
                            player={player.player}
                            odd={player.odd} />
                    })
                }
                </section>
            </div>
        );
    }
}