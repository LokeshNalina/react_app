import React, { useContext } from 'react';
import { UserContext } from "./userDataList";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
   
  });

export const UserList = () => {
  const history = useHistory();
  const editUser = (event,id) =>{
    event.preventDefault();
    history.push("/edit/"+id);
  }
  const { users, removeUser } = useContext(UserContext);
   const classes = useStyles();
  return (
    <div style={{margin:"20px"}}>
      <TableContainer component={Paper}>
      {users.length > 0 ? (
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{width:"10%"}}>Id</StyledTableCell>
            <StyledTableCell align="left" style={{width:"20%"}}>First Name</StyledTableCell>
            <StyledTableCell align="left" style={{width:"20%"}}>Last Name</StyledTableCell>
            <StyledTableCell align="left" style={{width:"20%"}}>Email</StyledTableCell>
            <StyledTableCell align="center" style={{width:"10%"}}>Edit</StyledTableCell>
            <StyledTableCell align="center" style={{width:"10%"}}> Delete</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.firstName}</StyledTableCell>
              <StyledTableCell align="left">{user.lastName}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" color="primary"  onClick={(event) => editUser(event,user.id)}>  
                  Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center" onClick={() => removeUser(user.id)}>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      ) :(
        <h4 className="text-center">No Users</h4>
      )}
      </TableContainer>
      </div>
  )
}
