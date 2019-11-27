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

export default function Account({ formProps: { register, errors }, data }) {
    const classes = useStyles();
    const { email, password, confirmPassword } = data[0]

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
                            id="email"
                            label="Email"
                            name="email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.email}
                            defaultValue={email}
                        />
                        {errors.email && <p className={classes.errorMessage}>{errors.email.message}</p>}

                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            type="password"
                            inputRef={register}
                            error={!!errors.password}
                            defaultValue={password}
                        />
                        {errors.password && <p className={classes.errorMessage}>{errors.password.message}</p>}

                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >

                    <Grid item md={12} xs={12}>
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            name="confirmPassword"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            type="password"
                            inputRef={register}
                            error={!!errors.confirmPassword}
                            defaultValue={confirmPassword}
                        />
                        {errors.confirmPassword && <p className={classes.errorMessage}>{errors.confirmPassword.message}</p>}

                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}
