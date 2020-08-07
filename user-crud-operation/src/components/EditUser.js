import React, { Component ,useState,useContext,useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { UserContext } from "./userDataList";

export const EditUser = (props) =>{
    const { editUser, users } = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState({
      id: '',
      firstName: '',
      lastName:'',
      email:''
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;
  
    useEffect(() => {
      const userId = currentUserId;
      const selectedUser = users.find(user => user.id === userId);
      setSelectedUser(selectedUser);
    }, [currentUserId, users])
  
    const onInputChange = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      editUser(selectedUser);
      history.push("/")
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
              placeholder="Enter Your First Name"
              label="First Name"
              name="firstName"
              onChange={e => onInputChange(e)}
              defaultValue={selectedUser.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              name="lastName"
              onChange={e => onInputChange(e)}
              defaultValue={selectedUser.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              name="email"
              onChange={e => onInputChange(e)}
              defaultValue={selectedUser.email}
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
