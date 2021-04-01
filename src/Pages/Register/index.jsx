// MODULES
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import RegisterForm from '../RegisterForm'

// OTHER
import baseUrl from '../../Common/urlApi'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    submit: {
        width: "20%",
        height: "40px",
        marginTop: "70px",
        marginBottom: "100px",
        marginLeft: "40%",
        backgroundColor: 'green',
        color: "white",
        fontWeight: "bold"
    }
}));

export default function Register(props) {
    const classes = useStyles()
    const history = useHistory()
    const [ users, setUsers ] = useState([{}, {}, {}, {}])
    const [ usersCount, setUsersCount ] = useState(0)

    const register = async () => {
        if(usersCount !== 4) {
            alert('Minimum user is 4!')
        } else {
            axios({
                method: "POST",
                url: baseUrl + 'player/register',
                data: {
                    users: JSON.stringify(users),
                    data: users
                }
            })
            .then((res) => {
                alert("Register Success!")
                localStorage.setItem("table_key", JSON.stringify(res.data.table))
                localStorage.setItem("data", JSON.stringify(res.data.data))
                return history.push(`/lobby/${res.data.table}/${res.data.data[0].user}`)
            })
            .catch((err) => {
                console.log(err)
                alert("Register failed!")
            })
        }
    }

    return (
        <Grid container className={classes.root} >

            <RegisterForm 
                iconColor="red" 
                typePlayer={1}
                users={users}
                setUsers={setUsers} 
                usersCount={usersCount}
                setUsersCount={setUsersCount}
            />
            <RegisterForm 
                iconColor="blue" 
                typePlayer={2}
                users={users}
                setUsers={setUsers} 
                usersCount={usersCount}
                setUsersCount={setUsersCount}
            />
            <RegisterForm 
                iconColor="green" 
                typePlayer={3}
                users={users}
                setUsers={setUsers} 
                usersCount={usersCount}
                setUsersCount={setUsersCount}
            />
            <RegisterForm 
                iconColor="orange" 
                typePlayer={4}
                users={users}
                setUsers={setUsers} 
                usersCount={usersCount}
                setUsersCount={setUsersCount}
            />

            <Button
                type="button"
                variant="contained"
                className={classes.submit}
                onClick={register}
            >
                Register
            </Button>
        </Grid>
    );
}