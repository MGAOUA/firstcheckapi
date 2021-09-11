import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
export const UserList = () => {
  const [Users, setUsers] = useState();
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    const getListUsers = async () => {
      try {
        const listUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(listUsers.data);
        console.log(listUsers);
        setLoad(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoad(false);
      }
    };

    getListUsers();
  }, []);
  return (
    <div>
      {load ? (
        <div>is loading</div>
      ) : error ? (
        <div>is erreur</div>
      ) : (
        <ul>
          {Users.map((e) => (
            <li>{e.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
