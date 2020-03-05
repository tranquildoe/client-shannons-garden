import React, { useState, useEffect } from 'react'
import AddSeeds from "./../views/AddSeeds"
import ListPlants from "./../components/form/ListPlants"
import AddSeedInstForm from "./../components/form/AddSeedInstForm"
import apiHandler from "./../api/APIHandler";


export default function AddSeedInstPage() {

    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);

    useEffect(() => {
        apiHandler.get("/plants").then(apiRes => {
            setPlants(apiRes.data.plants);
        });
    }, []);

    const displayPlantClbk = (plant) => {
        setSelectedPlant(plant);
    };

    const displaySelectedPlant = () => <span>{selectedPlant.commonName} - {selectedPlant.latinName}</span>;

    return (
        <div>
        <ListPlants plants={plants} displayPlantClbk={displayPlantClbk}></ListPlants>
        {selectedPlant && <h1 className="title plant">{displaySelectedPlant()}</h1>}
        {selectedPlant ? <AddSeedInstForm plantId={selectedPlant._id}></AddSeedInstForm> :
        <p>please select a plant before creating the seed</p>}
    </div>
    )
}


