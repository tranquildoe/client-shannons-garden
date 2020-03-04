// import React from 'react'
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import apiHandler from "./../../api/APIHandler";
    
export default function ListPlants() {
    const [plants, setPlants] = useState([]);
    // const [plants, setPlants] = useState([]);

    useEffect(() => {
    apiHandler.get("/plants").then(apiRes => {
        console.log(apiRes.data);
        // console.log(apiRes.data.seedInstances[0].plantId.commonName)
        // let seedInsts = apiRes.data.seedInstances;
        // console.log(seedInsts);
        // console.log("name", apiRes.data.seedInstances[0].plantId.commonName)
        setPlants(apiRes.data.plants);
        // apiRes.data.seedInstances.map((s, i) => (
        //   console.log("common name here", apiRes.data.seedInstances[i].plantId.commonName),
        //   console.log("latin name here", apiRes.data.seedInstances[i].plantId.latinName),
        //   console.log(<Dropdown.Item key={i}>`{apiRes.data.seedInstances[i].plantId.commonName}`</Dropdown.Item>)
        // ))
        // here append the nodes inside
        // Look up the add nodes syntax, add element, etc., create new node, append new nodes
        // var plantNodes = 0;
    });
    }, []);

    return (
    <React.Fragment>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose a Plant Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {
            plants.length && plants.map((p, i) => (
                <Dropdown.Item href="#/action-1">
                {p.commonName} -  {p.latinName}
                </Dropdown.Item>
            ))
            }
        </Dropdown.Menu>
        </Dropdown>
        {/* <div>
        {data.seedInstances.commonName} - {data.seedInstances.latinName}{" "}
        </div>*/}
    </React.Fragment>
    );
};

