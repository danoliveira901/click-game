// Dependencies
import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="sticky" id="navbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Clicky Game</h1>
                    </div>
                    <div className="col-md-4">
                        {/* The following handles props to indicate if the guess is correct or incorrect */}
                        <h1 className={props.guess ? "green-text" : (props.guess === "") ? "" : "red-text"}>
                            {(props.guess) ? "You guessed correctly!" : (props.guess === "") ? "Click an image to begin!" : "You guessed incorrectly!"}
                        </h1>
                    </div>
                    <div className="col-md-4">
                        {/* Grabs the score and top score from state and displays here */}
                        <h1>Score: {props.score || 0} | Top Score: {props.topScore || 0}</h1>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
