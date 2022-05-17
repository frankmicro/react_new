import React from "react";
import DashboardComponent from "../components/DashboardComponent";

const Home = (props) => {
    return (
        <div>
            <div className="splash-container">
                <div className="splash">
                    <h1>Splendid Food</h1>
                </div>
            </div>
            <DashboardComponent inventory={props.inventory}></DashboardComponent>
        </div>
    );
}

export default Home;