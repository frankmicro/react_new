import React from "react";

const person = (props) => {

    return (
        <div>
            <p>Im a person! with name {props.name} my age is {props.age} {Math.round(Math.random()*30)}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;