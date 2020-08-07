import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {id:uuid(),firstName:"Nalina",lastName:"Lokesh",email:"nalina.v@gmail.com"},
    {id:uuid(),firstName:"Lokesh",lastName:"Narayanappa",email:"lokesh.v@gmail.com"},
    {id:uuid(),firstName:"Nishitha",lastName:"Lokesh",email:"nishitha.v@gmail.com"},
    {id:uuid(),firstName:"Harika",lastName:"Gajendra",email:"harika.v@gmail.com"},
    {id:uuid(),firstName:"Gajendra",lastName:"venkatesh",email:"gajendra.v@gmail.com"},
    {id:uuid(),firstName:"meena",lastName:"Gajendra",email:"meena.v@gmail.com"},
    {id:uuid(),firstName:"Susheela",lastName:"venkatesh",email:"susheela.v@gmail.com"},
    {id:uuid(),firstName:"Venkatesh",lastName:"Narayana",email:"venkatesh.v@gmail.com"},
    {id:uuid(),firstName:"Akhil",lastName:"Lokesh",email:"akhil.v@gmail.com"},
    
  ]
}


export const UserContext = createContext(initialState);


export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const removeUser = (id) => {
    dispatch({
      type: 'DELETE',
      Id: id
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD',
      id: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT',
      Id: user
    })
  }

  return (
    <UserContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser
    }}>
      {children}
    </UserContext.Provider>
  )
}