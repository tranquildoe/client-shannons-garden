// import React from 'react'
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
    
export default function ListPlants({displayPlantClbk, plants}) {


    return (
    <React.Fragment>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose a Plant Type!
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {
            plants.length && plants.map((p, i) => (
                <Dropdown.Item key={p._id} href="#/action-1" onClick={(e) => displayPlantClbk(p)}>
                {p.commonName} -  {p.latinName}
                </Dropdown.Item>
            ))
            }
        </Dropdown.Menu>
        </Dropdown>
    </React.Fragment>
    );
};

// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );
