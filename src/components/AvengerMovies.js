import React from "react";

function AvengerMovies(props) {
    return (
        <div>
            <p>{props.movies.map(movie => {
                return (
                    <div key={movie}>
                        {movie}
                    </div>)
            })}</p>
        </div>
    );
}

export default AvengerMovies;