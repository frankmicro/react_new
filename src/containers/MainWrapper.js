import React, { useState } from "react";
import Header from "../views/layouts/Header";
import Sidebar from "../views/layouts/Sidebar"

const MainWrapper = (props) => {
    const [sidebar, setSidebar] = useState(true) 
    const handleSidebar = isVisible => {
        setSidebar(isVisible)
    }
    return (
        <>
        <Header handleSidebar={handleSidebar}/>
        {
           sidebar ? (
            <Sidebar handleSidebar={handleSidebar}/>
           ) : null
        }
        <main className={props.class}>
        <h2>{ props.pageName?props.pageName:'Default' }</h2>
            <div className="recommended">
                {props.children}
            </div>
        </main>
        </>
    );
}

export default MainWrapper;