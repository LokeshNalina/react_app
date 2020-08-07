import React, {useState,useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
 import { v4 as uuid } from "uuid";
import { UserContext } from "./userDataList";

export const AddUser = () =>{

    const [user, setUser] = useState({
        lastName: "",
        firstName: "",
        email: ""
      });
    
      const { lastName, firstName, email ,isValidFirstName} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const { addUser } = useContext(UserContext);
      const history = useHistory();

      const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          id: uuid(),
          firstName,
          email,
          lastName
        }
        addUser(newUser);
        history.push("/");
      }



    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm' 
           
          >
        <form  onSubmit={e => onSubmit(e)} autoComplete="off">
            <AppBar title="Enter User Details" />
            <TextField
              error={isValidFirstName}
              helperText=''
              placeholder="Enter Your First Name"
              label="First Name"
              name="firstName"
              onChange={e => onInputChange(e)}
              defaultValue={firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              name="lastName"
              onChange={e => onInputChange(e)}
              defaultValue={lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              name="email"
              onChange={e => onInputChange(e)}
              defaultValue={email}
              margin="normal"
              fullWidth
              type="email"
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={e => onSubmit(e)}
            >Submit</Button>
            </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
