import React, { Component } from 'react'
import AddSeeds from "./../views/AddSeeds"
// import AddSeedInstance from "./../components/form/AddSeedInstance"
import ListPlants from "./../components/form/ListPlants"
import AddSeedInstForm from "./../components/form/AddSeedInstForm"
// import Form2 from "./../components/form/Form2"
// import "./../styles/Form2.css"

export default class AddSeedInstPage extends Component {
    render() {
        return (
            <div>
                {/* <AddSeedInstance></AddSeedInstance> */}
                <ListPlants></ListPlants>
                {/* <AddSeeds></AddSeeds> */}
                <AddSeedInstForm></AddSeedInstForm>
                {/* <Form2></Form2> */}
            </div>
        )
    }
}

