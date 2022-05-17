import React, { useEffect } from "react";

const MyChildComponent = (props) => {
    useEffect(() => {
        console.log("i important hook..can also call api request");
    },[]) //can pass argument in array when to run effect..if left empty only runs once when component rendered
    //https://www.smashingmagazine.com/2021/11/useful-react-hooks/#:~:text=The%20useState%20hook%20is%20the,be%20used%20in%20our%20application.&text=To%20initialize%20the%20state%2C%20we,and%20pass%20an%20initial%20value.
    //useReducer, useEffect, useState, useReducer,useContext, 
    //themeReducer, useMemo, useCallback,useRef,useLayoutEffect,useDispatch,useSelector
    //useHistory, useLocation, useParams, useRouteMatch
    //Math.random().toString(36).substring(2,7)
    return (
        <div>
            <p>MyChildComponent { props.name }</p>
            <button onClick={props.clickMe}>Click Me!</button>
        </div>
    );
}

export default MyChildComponent;