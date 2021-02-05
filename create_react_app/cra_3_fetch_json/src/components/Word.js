import React from 'react';
import "./Word.css"


const Word = (props) => (
    <li key={props.id}>Słowo po angielsku: <strong>{props.en}</strong>, Tłumaczenie: <strong>{props.pl}</strong></li>
)

export default Word;