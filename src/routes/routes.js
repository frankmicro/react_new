import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	...rest
}) => (
		<Route
			{...rest}
			render={props => {

				// if (isAuthProtected && !localStorage.getItem("authUser")) {
				// 	return (
				// 		<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
				// 	);
				// }
				// setAuthToken();
				return (
					<div>
						<Component {...props} />
					</div>
				);
			}}
		/>
	);

export default AppRoute;

