import React from 'react';
import './Betslip.css';
import { Price } from './Price';

export const PriceList = ({ players }) => {
    const allPrices = players.map((user, i) => {
        return <Price key={i} price={players[i].price} />;
    })
    return (
        { allPrices }
    );
}
