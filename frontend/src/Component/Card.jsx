import React, { useState, useEffect } from 'react';

const Card = ({ cards, loading}) => {
    console.log(cards);
    if(loading) return <div className="loading"><h2> Loading... </h2></div>

    if(cards.length === 0) return <p>No cards available for your Search Query</p>

    return (
        <div className="card-container">
            {cards.map(card => (
                <div key={card._id} className="card">
                    <div className="card-title">
                        {card.title}
                    </div>
                    <p>{card.description}</p>
                </div>
            ))};
        </div>
    );
};

export default Card;