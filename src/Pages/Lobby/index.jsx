// MODULES
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';
import { Button } from '@material-ui/core';

// COMMON
import baseUrl from '../../Common/urlApi';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    submit: {
        width: "20%",
        height: "40px",
        marginTop: "70px",
        margin: "2%",
        color: "white",
        fontWeight: "bold"
    },
    header: {
        textAlign: "center",
        marginTop: "7%"
    }
}));

function Lobby() {
    const { key } = useParams()
    const classes = useStyles()
    const playerColour= ["red", "blue", "green", "orange"]
    const dataUsers = JSON.parse(localStorage.getItem('data'))
    const [ listUsername, setListUsername ] = useState([])

    const getListUsername = async () => {
        axios({
            method: "GET",
            url: baseUrl + `player/list-username?key=${localStorage.getItem("table_key")}`
        })
        .then((res) => {
            setListUsername(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderUsers = () => {
        return listUsername.map((val, idx) => {
            return (
                <Button 
                    component={Link}
                    to={`/gameplay/${key}/${dataUsers[idx].user}`}
                    target="_blank"
                    type="button"
                    variant="contained"
                    className={classes.submit}
                    style={{ backgroundColor: playerColour[idx] }}
                >
                    {val.username}
                </Button>
            )
        })
    }

    useEffect(() => {
        getListUsername()
    }, [])

    return (
        <div>
            <h4 className={classes.header}>Start Player</h4>
            <div className={classes.buttonContainer}>
                {renderUsers()}
            </div>
        </div>
    );
}

export default Lobby;
