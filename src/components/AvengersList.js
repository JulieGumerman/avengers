import React from "react";
import avengers from "../data";
import { Link } from "react-router-dom";


function AvengersList(props) {

    const TheList = props.avengers.map(avenger=> {
            return (
                <div className="character-card" key={avenger.id}>
                    <img src={avenger.thumbnail} alt={avengers.name}/>
                     <h2><Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link></h2> 
                    <p>({avenger.nickname})</p>
                </div>
            )
        })

    return (
        <div className="characters-list-wrapper">
            {TheList}
        </div>
    )
}

export default AvengersList;