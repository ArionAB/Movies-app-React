import React from "react";
import { Card } from '../card/card.comp';

import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list">
    {props.filme.map(film => (
        <Card key={film._id} film= { film }>
        </Card>
    
    ))}
    </div>
    )

  