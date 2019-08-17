import React from "react";
import avengers from "../data";

const TheList = avengers.map(avenger=> {
    return (
        <div className="character-card" key={avenger.id}>
            <img src={avenger.thumbnail} />
            <h2>{avenger.name}</h2>
            <p>({avenger.nickname})</p>
        </div>
    )
})
function AvengersList() {
    return (
        <div className="characters-list-wrapper">
            {TheList}
        </div>
    )
}

export default AvengersList;