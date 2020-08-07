import React from 'react';
import { UserList } from "./UserList.js";
import MenuAppBar  from "./MenuAppBar.js";

export const Home = () => {
  return (
    <>
      <MenuAppBar />
      <UserList />
    </>
  )
}
