import React from "react";
import { Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Avengers!</h1>
            <h4>Danger: Top Secret!</h4>
            <Link to="/avengers">Enter</Link>
        </div>
    )
}

export default Home;