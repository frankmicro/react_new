import React, { useState } from "react";
import Header from "../views/layouts/Header";
import Sidebar from "../views/layouts/Sidebar"
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "../context/AuthProvider";

const MainWrapper = (props) => {
    const [sidebar, setSidebar] = useState(false) 
    const handleSidebar = isVisible => {
        setSidebar(isVisible)
    }
    return (
        <>
        <AuthProvider>
            <Header handleSidebar={handleSidebar}/>
            {
            sidebar ? (
                <Sidebar handleSidebar={handleSidebar}/>
            ) : null
            }
            <main className={props.class}>
            <h2>{ props.pageName?props.pageName:'Default' }</h2>
                <div className="recommended">
                <ToastContainer />
                    {props.children}
                </div>
            </main>
        </AuthProvider>
        </>
    );
}

export default MainWrapper;