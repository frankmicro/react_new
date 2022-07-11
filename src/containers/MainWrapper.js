import React from "react";
import Header from "../views/layouts/Header";

const MainWrapper = (props) => {
    return (
        <div>
        <Header/>
        <main className={props.class}>
        <h2>{ props.pageName?props.pageName:'Default' }</h2>
            <div className="recommended">
                {props.children}
            </div>
        </main>
        </div>
    );
}

export default MainWrapper;