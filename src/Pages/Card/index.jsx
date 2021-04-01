import React from 'react';

// STYLE
import '../Gameplay/gameplay.css'

//  function Card(props) {
const Card = (props) => {
    const { 
        val,
        idx,
        choices,
        setChoices,
        cards,
        setCards
    } = props

    const addOrRemoveCardToChoice = async () => {
        if(cards[idx]["choiced"]) {
            let choice = [...choices] 
            let cardsAll = [...cards]
            let removedChoice = choice.filter( function( obj ) {
                return obj.index !== val.index
            })
            cardsAll[idx]["choiced"] = false
            setChoices(removedChoice)
            setCards(cardsAll)
        } else {
            let choice = [...choices]
            let cardsAll = [...cards]
            let data = {
                index: val.index,
                code: val.code
            }
            cardsAll[idx]["choiced"] = true
            choice.push(data)
            setChoices(choice)
            setCards(cardsAll)
        }
    }
    
    return (
        <img 
            src={val.card.default} 
            key={idx}
            onClick={addOrRemoveCardToChoice}
            className="gameplay-card"
            alt="Player Card"
            style={{ width: cards[idx]["choiced"] ? "76px" : "70px" }}
        /> 
        
    )
}

export default Card;