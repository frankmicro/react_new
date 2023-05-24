import React from "react";

const WrapperTest = (props) => {
    return (
        <>
            <p>wrapper test</p>
            {props.children}
        </>
    );
}

export default WrapperTest;