import React, { useState, useEffect } from 'react';
import apiHandler from "./../../api/APIHandler"

export default function SeedBasic({isEditable, isForTrade}) {
    const [mySeeds, setMySeeds] = useState([]);

    useEffect(() => {
        apiHandler.get("/seeds", {isForTrade})
            .then(apiRes => {
                console.log(apiRes);
                setMySeeds(apiRes.data.seedInstances)
            })
            .catch(apiErr => console.error(apiErr))
    }, [isForTrade]); // only run this effect once (onload)

    
    const handleChange = (evt, seed) => {
        // if (!isEditable) {
        //     console.log("here")
        //     evt.stopPropagation() 
        //     evt.preventDefault();
        //     return false;
        // }
        // console.log("shouldnt be there")
        const index = mySeeds.indexOf(seed)
        const clone = [...mySeeds];
        clone[index][evt.target.name] = evt.target.checked;
        apiHandler.patch(`/seeds/${seed._id}`, seed)
        .then(apiRes => {
            console.log(apiRes)
            setMySeeds(clone);
        })
        .catch(apiErr => console.log(apiErr))

    };

    return <>{
        mySeeds.map((oneSeed, i) => (
            <div className="topTwoRows" key={i} onChange={(e) => handleChange(e, oneSeed) } style={{pointerEvents: isEditable ? 'auto' : 'none'}}>
                <div className="labels">
                    <div className="item">Latin name</div>
                    <div className="item">Common name</div>
                    <div className="item">Variety</div>
                </div>
                <div className="names">
                    <div className="item">{oneSeed.plantId.latinName}</div>
                    <div className="item">{oneSeed.plantId.commonName}</div>
                    <div className="item">{oneSeed.variety}</div>
                </div>
                <div className="infos">
                    <div className="notes">

                        <p className="text"><b className="label">My notes :</b><br />{oneSeed.myNotes}</p>
                    </div>
                    <div className="checkboxes">
                        <label htmlFor="forTrade">for trade</label>
                        <input type="checkbox" id="forTrade" name="forTrade" defaultChecked={oneSeed.forTrade} />

                        <label htmlFor="isOpenPollinated">is open-pollinated</label>
                        <input type="checkbox" id="isOpenPollinated" name="isOpenPollinated" defaultChecked={oneSeed.isOpenPollinated} />

                        <label htmlFor="isHeirloom">is heirloom</label>
                        <input type="checkbox" id="isHeirloom" name="isHeirloom" defaultChecked={oneSeed.isHeirloom} />

                        <label htmlFor="isHybrid">is hybrid</label>
                        <input type="checkbox" id="isHybrid" name="isHybrid" defaultChecked={oneSeed.isHybrid} />

                        <label htmlFor="isMedicinal">is medicinal</label>
                        <input type="checkbox" id="isMedicinal" name="isMedicinal" defaultChecked={oneSeed.isMedicinal} />

                        <label htmlFor="isEdible">is edible</label>
                        <input type="checkbox" id="isEdible" name="isEdible" defaultChecked={oneSeed.isEdible} />

                    </div>
                </div>
            </div>
        ))
    }</>



}
