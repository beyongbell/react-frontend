import * as React from "react"
import { Grid } from "@mui/material";
import { Typography } from "@mui/material"
import { Button } from "@mui/material"

import { Link } from "gatsby";

import { makeStyles } from "tss-react/mui";

import address from "@images/address.svg"
import email from "@images/email-adornment.svg"
import send from "@images/send.svg"
import phone from "@images/phone-adornment.svg"
import name from "@images/name-adornment.svg"

import Main from '@layouts/main'

const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      height: "45rem",
      backgroundColor: theme.palette.primary.main,
      marginBottom: "10rem",
      [theme.breakpoints.down("md")]: {
        marginTop: "8rem",
        height: "90rem",
      },
    },
    formContainer: {
      height: "100%",
    },
    formWrapper: {
      height: "100%",
      [theme.breakpoints.down("md")]: {
        height: "50%",
        marginTop: "-8rem",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    blockContainer: {
      backgroundColor: theme.palette.secondary.main,
      height: "8rem",
      width: "40rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "30rem",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    titleContainer: {
      marginTop: "-4rem",
    },
    buttonContainer: {
      marginBottom: "-4rem",
      textTransform: "none",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    sendIcon: {
      marginLeft: "2rem",
    },
    contactInfo: {
      fontSize: "1.5rem",
      marginLeft: "1rem",
    },
    contactIcon: {
      height: "3rem",
      width: "3rem",
    },
    contactEmailIcon: {
      height: "2.25rem",
      width: "3rem",
    },
    infoContainer: {
      height: "21.25rem",
      [theme.breakpoints.down("xs")]: {
        height: "15.25rem",
      },
    },
    middleInfo: {
      borderTop: "2px solid #fff",
      borderBottom: "2px solid #fff",
    },
    iconContainer: {
      borderRight: "2px solid #fff",
      height: "7rem",
      width: "8rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        height: "5rem",
        width: "6rem",
      },
    },
    textField: {
      width: "30rem",
      [theme.breakpoints.down("sm")]: {
        width: "20rem",
      },
    },
    input: {
      color: "#fff",
    },
    fieldContainer: {
      marginBottom: "1rem",
    },
    multilineContainer: {
      marginTop: "1rem",
    },
    emailAdornment: {
      height: 17,
      width: 22,
      marginBottom: 10,
    },
    phoneAdornment: {
      width: 25.173,
      height: 25.122,
    },
    multiline: {
      border: "2px solid #fff",
      borderRadius: 10,
      padding: "1rem",
    },
    multilineError: {
      border: `2px solid ${theme.palette.error.main}`,
    },
    buttonDisabled: {
      backgroundColor: theme.palette.grey[500],
    },
    sendMessage: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.5rem",
      },
    },
    "@global": {
      ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "2px solid #fff",
      },
      ".MuiInput-underline:after": {
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
      },
    },
  }
})

const Contact = () => {
  const { classes } = useStyles();
  return (
    <Main>
        <Grid container justify="space-around" alignItems="center">
          {/* Contact Form */}
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                Contact Us
              </Grid>
              <Grid item>
                <Button>
                  <Typography variant="h4">
                    send message
                  </Typography>
                  <img src={send} alt="send message" />
                </Button>  
              </Grid>
            </Grid>
          </Grid>
          {/* Contact Info */}
          <Grid item>
            <Grid container direction="column">
              <Grid item container>
                <Grid item>
                  <img src={address} alt="address" />
                </Grid>
                <Grid item>
                  <Typography variant="h2">
                    1234 Main Street , 1992
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item>
                  <img src={phone} alt="phone" />
                </Grid>
                <Grid item>
                  <Typography variant="h2">
                    (555) 555-5555
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item>
                  <img src={email} alt="email" />
                </Grid>
                <Grid item>
                  <Typography variant="h2">
                    test@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Main>
  )
}

export default Contact

export const Head = () => <title>Contact Page</title>
