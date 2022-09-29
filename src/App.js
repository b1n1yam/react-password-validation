import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Line from "./Line";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/b1n1yam/react-password-validation"
      >
        Biniyam Daniel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default class App extends Component {
  state = {
    password: "",
    error: ""
  };
  onChange(e) {
    let txt = e.target.value;
    this.setState({ password: e.target.value });
    if (txt.length < 8) {
      this.setState({ error: "Password must be atleast 8 characters" });
    } else if (txt.length > 16) {
      //show error
      this.setState({ error: "Password exceeds max length" });
    }
    if (txt.length > 7 && txt.length < 17) {
      this.setState({ error: "" });

      /* other val */
      if (txt.search(/[a-z]/) < 0) {
        this.setState({
          error: "Your password must contain at least one small letter."
        });
      }

      if (txt.search(/[0-9]/) < 0) {
        this.setState({
          error: "Your password must contain at least one digit."
        });
      }
      if (txt.search(/[A-Z]/) < 0) {
        this.setState({
          error: "Your password must contain at least one capital letter."
        });
      }
      if (txt.search(/[!@#$%^&*]/) < 0) {
        this.setState({
          error: "Your password must contain at least one special character."
        });
      }
    }
  }

  render() {
    const txt = this.state.password;
    let lengthVal, specialVal, CapitalVal, smallVal, numericVal;
    if (txt.length != 0) {
      if (txt.length > 7 && txt.length < 17) {
        //set colors
        if (txt.length >= 8 && txt.length < 10) {
          lengthVal = <Line color="#E65100" label="not bad" />;
        } else if (txt.length >= 10 && txt.length < 12) {
          lengthVal = <Line color="#FFC107" label="week" />;
        } else if (txt.length >= 12 && txt.length < 15) {
          lengthVal = <Line color="#88c34a" label="good" />;
        } else if (txt.length >= 15) {
          lengthVal = <Line color="#4caf50" label="strong" />;
        }

        /* special */
        if (txt.search(/[!@#$%^&*]/) > 0) {
          specialVal = <Line color="#4caf50" label="special char" />;
        }
        if (txt.search(/[A-Z]/) > 0) {
          CapitalVal = <Line color="#4caf50" label="Capital letter" />;
        }
        if (txt.search(/[a-z]/) > 0) {
          smallVal = <Line color="#4caf50" label="small letter" />;
        }
        if (txt.search(/[0-9]/) > 0) {
          numericVal = <Line color="#4caf50" label="numerics" />;
        }
      }
    }

    const { error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={Styles.paper}>
          <Typography component="h1" variant="h5">
            React Password Validation
          </Typography>

          <form style={Styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={this.onChange.bind(this)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div>
              <div style={Styles.error}>{error}</div>
            </div>
            <div style={{ display: "inline-flex" }}>
              {lengthVal} {specialVal} {CapitalVal} {smallVal} {numericVal}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={Styles.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
const Styles = {
  paper: {
    marginTop: 50,
    display: "flex",

    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 20
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 10
  },
  submit: {
    marginTop: 60,
    marginBottom: 20
  },
  error: {
    width: 100 + "%",
    marginBottom: 10,
    fontSize: 13,
    fontWaight: 500,
    color: "#f44336",
    float: "right"
  }
};
