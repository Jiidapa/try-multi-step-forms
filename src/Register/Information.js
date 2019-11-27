import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '-1rem 0 2rem 0',
        padding: '0 7rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0'
        },
        [theme.breakpoints.down('md')]: {
            padding: '0'
        },
        marginTop: 'auto'
    },
    textField: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '0.2rem'
    }
}));


export default function Information({ formProps: { register, errors }, data}) {
    const classes = useStyles();
    const { firstName, lastName, nickname } = data[0]

    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                        <TextField
                            id="firstName"
                            label="Firstname"
                            name="firstName"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.firstName}
                            defaultValue={firstName}
                        />
                        {errors.firstName && <p className={classes.errorMessage}>{errors.firstName.message}</p>}

                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            id="lastName"
                            label="Lastname"
                            name="lastName"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.lastName}
                            defaultValue={lastName}
                        />
                        {errors.lastName && <p className={classes.errorMessage}>{errors.lastName.message}</p>}
                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                        <Grid item md={12} xs={12}>
                            <TextField
                                id="nickname"
                                label="Nickname"
                                name="nickname"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                inputRef={register}
                                error={!!errors.nickname}
                                defaultValue={nickname}
                            />
                            {errors.nickname && <p className={classes.errorMessage}>{errors.nickname.message}</p>}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}
