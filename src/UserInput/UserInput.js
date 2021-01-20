import { React } from "react";

const UserInput = props => {
    const style = {
        backgroundColor:'white'
    };

    return (
        <input type="text" onChange={props.changed} style={style}/>
    )
}

export default UserInput;