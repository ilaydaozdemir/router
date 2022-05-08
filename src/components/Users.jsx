import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>user 1</h1>
      <h1>user 2</h1>
      <h1>user 3</h1>
      <Outlet/>
    </div>
  );
};

export default Users;
