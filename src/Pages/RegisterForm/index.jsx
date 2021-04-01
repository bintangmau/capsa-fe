import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1)
    },
    form: {
        width: '60%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function RegisterForm(props) {
    const classes = useStyles();
    const { iconColor, typePlayer, users, setUsers, usersCount, setUsersCount } = props;
    const [ username, setUsername ] = useState('')
    const [ isSumbited, setIsSubmited ] = useState(false)
    const [ isRename, setIsRename ] = useState(false)

    const addUser = async () => {
        if(!username) {
            return alert("Username is empty!")
        } 
        let data = { id: typePlayer, "username": username }
        let usersData = [...users]
        if(isRename) {
            usersData[typePlayer - 1] = data
            setUsers(usersData)
            setIsSubmited(true)
            setIsRename(false)
        } else {
            usersData[typePlayer - 1] = data
            setIsSubmited(true)
            setUsers(usersData)
            setUsersCount(usersCount + 1)
        }
    }

    const rename = async () => {
        setIsSubmited(false)
        setIsRename(true)
    }

    return (
        <Grid className={classes.paper} item xs={6}>
            <Avatar className={classes.avatar} style={{ backgroundColor: iconColor }}>
            </Avatar>
            <Typography component="h1" variant="h5">
                Player {typePlayer}
            </Typography>
            <form className={classes.form} noValidate>
            {
                isSumbited
                ?
                <>
                    <p style={{ textAlign: "center" }}>
                        {username}
                    </p>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={rename}
                    >
                        Rename
                    </Button>
                </>
                :
                <>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={addUser}
                    >
                        Submit
                    </Button>
                </>
            }
            </form>
        </Grid>
    )
}
