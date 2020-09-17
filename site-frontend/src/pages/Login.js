import React from 'react';
import {Grid, Typography, Checkbox, Button, Paper, TextField, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
import * as Yup from 'yup';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: '10rem'
  },
  outerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formPaper: {
    width: '100%',
    height: '100%',
    padding: '3rem',
    borderRadius: '1rem',
    maxWidth: '30rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
      maxWidth: '19rem',
      margin: '0 1rem'
    }
  },
  mediaSub: {
    textAlign: 'center',
    fontSize: '25px',
    fontFamily: 'Saira Semi Condensed',
    margin: '1rem 0 2rem 0'
  },
  formFields: {
    margin: '1rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0'
    }
  },
  loggedIn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  submitBtn: {
    marginTop: '1rem'
  },
  oAuth: {
    margin: '2rem 0'
  },
  oAuthBtn: {
    margin: '1rem 0'
  },
  alter: {
    margin: '2rem 0'
  }
}))

function Login(props) {
  const classes = useStyles();

  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  return (
      <Grid id='login' className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <Paper elevation={3} className={classes.formPaper}>
              <Typography className={classes.mediaSub}>Sign in</Typography>
              <Grid className={classes.formGrid}>
                <form onSubmit={props.handleSubmit}>
                  <TextField
                    className={classes.formFields}
                    fullWidth
                    required
                    name='email'
                    type='email'
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={(props.touched.email && props.errors.email) && props.errors.email}
                    error={props.touched.email && props.errors.email}
                    placeholder='Username or Phone'
                    label="Enter Username or Phone"
                    variant='outlined'
                  />
                  <TextField
                    className={classes.formFields}
                    fullWidth
                    required
                    name='password'
                    type='password'
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={(props.touched.password && props.errors.password) && props.errors.password}
                    error={props.touched.password && props.errors.password}
                    placeholder='Enter Password'
                    label="Password"
                    variant='outlined'
                  />
                  <Grid className={classes.loggedIn}>
                    <Checkbox color='primary' /> <p> Keep me logged in </p>
                  </Grid>
                  <Button type='submit' color='primary' variant='contained' fullWidth className={classes.submitBtn}> Log In </Button>
                </form>
              </Grid>
              <Grid className={classes.alter}>
                <Typography align='center' variant='body1'> Don't have an account? <Link to='/register'> Sign Up </Link></Typography>
              </Grid>
              <Grid className={classes.oAuth}>
                <hr />
                <Typography align='center' variant='body1'>Or, You can log in with</Typography>
                <Button startIcon={<FacebookIcon />} color='primary' variant='contained' fullWidth className={classes.oAuthBtn}> Facebook </Button>
                <Button startIcon={<InstagramIcon />} color='secondary' variant='contained' fullWidth className={classes.oAuthBtn}> Instagram </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Valid email required").required('Email is required'),
    password: Yup.string().min(8, "Your password is too short").required('Password is required')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert("Form submitted");
    console.log(values)
  }
})(Login);
