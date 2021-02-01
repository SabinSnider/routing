import React from 'react';
import { Link } from 'react-router-dom';

const users = [
    {
    id: 1,
    name: "ALex",
    age: 22,
    gender:'Male'
  },
  {
    id: 2,
    name: "Maria",
    age: 24,
    gender:'Female'
  },
  {
    id: 3,
    name: "Gleb",
    age: 52,
    gender:'Male'
  },
    
];

const Users = () =>{
    const user = users.find(user => user.id === parseInt(props.match.params.userId))
    return (
        <div>
            <h1> Name: {user.name}</h1>
            <h1> Age: {user.age}</h1>
            <h1> Gender: {user.gender}</h1>
        </div>
       
        );
    }


export default Users;