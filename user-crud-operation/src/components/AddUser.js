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
      const  [FirstNameError, setError] = useState({
         Ferror:false,
         helperFirstNameText:""
      });

      const  [LastNameError, setLastNameError] = useState({
        Lerror:false,
        helperLastNameText:''
     });
      const { lastName, firstName, email ,isValidFirstName} = user;
      const { Ferror,helperFirstNameText} = FirstNameError;
      const { Lerror,helperLastNameText} = LastNameError;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        
        if(e.target.name == "firstName" && e.target.value == ""){
          setError({ Ferror: true,helperFirstNameText:"Please fill this feild" });
        }else{
          setError({ Ferror: false,helperLastNameText:"" });
        }
        if(e.target.name == "lastName" && e.target.value == ""){
          setLastNameError({ Lerror: true,helperLastNameText:"Please fill this feild" });
        }else{
          setLastNameError({ Lerror: false,helperLastNameText:"" });
        }
       
      };

      const { addUser } = useContext(UserContext);
      const history = useHistory();
     
      const onSubmit = (e,fName,lName) => {
        e.preventDefault();
        if(fName != " " && lName !=""){
          const newUser = {
            id: uuid(),
            firstName,
            email,
            lastName
          }
          addUser(newUser);
          history.push("/");
        }else{
          alert("please fill all the feild ");
        }
       
      }

      const backToHome=(e)=>{
        e.preventDefault();
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
              error={Ferror}
              helperText={helperFirstNameText}
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
              error={Lerror}
              helperText={helperLastNameText}
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
              onClick={e => onSubmit(e,firstName,lastName)}
            >Submit</Button>

             <Button
              // color="primary"
              variant="contained"
              onClick={e => backToHome(e)}
            style={{marginLeft:"20px"}}>Cancle</Button>
            </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
