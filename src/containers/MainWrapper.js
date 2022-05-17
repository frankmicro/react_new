import React from "react";

const MainWrapper = (props) => {
    return (
        <main className={props.class}>
        <h2>{ props.pageName?props.pageName:'Default' }</h2>
            <div className="recommended">
                {props.children}
            </div>
        </main>
    );
}

export default MainWrapper;