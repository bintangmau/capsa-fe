import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS
import Card from '../Card'

// ASSETS
import { getCard } from '../../Common/cards';
import baseUrl from '../../Common/urlApi';
import backCard from '../../Assets/cards/blue_back.png';

// CSS
import "./gameplay.css";

function Gameplay() {
    const { key, table } = useParams()
    const [ cards, setCards ] = useState([])
    const [ choices, setChoices ] = useState([])
    const [ isFilled, setIsFilled ] = useState(false)

    useEffect(() => {
        getPlayersData()
        putCardThree()
    }, [])

    const getPlayersData = async () => {
        axios({
            method: "GET",
            url: baseUrl + `player/users-data?key=${key}`
        })
        .then( async (res) => {
            let allCard = await getCard(res.data.cards)
            setCards(allCard)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderCards = () => {
        return cards.map((val, idx) => {
            return (
                <Card
                    val={val} 
                    idx={idx} 
                    choices={choices} 
                    setChoices={setChoices}
                    isFilled={isFilled}
                    setIsFilled={setIsFilled}
                    cards={cards}
                    setCards={setCards}
                />
            )
        })
    }

    const renderBackCard = (type, length) => {
        let mapping = Array.from(Array(length).keys())
        return mapping.map((val) => {
            return (
                <img 
                    src={backCard} 
                    key={val}
                    className={`gameplay-backcard-` + type} 
                    alt="Back Card"
                /> 
            )
        })
    }

    const putChoice = () => {
        if(!choices[0]) {
            return null
        }
        axios({
            method: "POST",
            url: baseUrl + 'match/put-card',
            data: {
                choices
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const clearChoices = () => {
        if(!choices[0]) {
            return null
        }
        let cardAll = [...cards]
        cards.map((val, idx) => {
            cardAll[idx]["choiced"] = false
        })
        setCards(cardAll)
        setChoices([])
    }

    const putCardThree = () => {
        axios({
            method: "POST",
            url: baseUrl + `match/put-card-three?key=${table}`,
        })
        .then((res) => {
            console.log(res, "RESS")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="gameplay-room">
            
            <div className="gameplay-upper-box">
                {renderBackCard("upper", 13)}
            </div>

            <div className="gameplay-center-box">
                <div className="gameplay-backcard-box">
                    {renderBackCard("left", 4)}
                </div>
                <div className="gameplay-table"></div>
                <div className="gameplay-backcard-box">
                    {renderBackCard("right", 4)}
                </div>
            </div>

            <div className="gameplay-button-box">
                <button
                    onClick={putChoice}
                    className="gameplay-btn-put"
                >
                    Put Card
                </button>
                <button 
                    onClick={clearChoices}
                    className="gameplay-btn-clear"
                >
                    Clear
                </button>
            </div>

            <div className="gameplay-mycard-box">
                {renderCards()}
            </div>

        </div>
    )
}

export default Gameplay