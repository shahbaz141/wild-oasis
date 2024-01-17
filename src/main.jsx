import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Login from "./pages/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
const router =createBrowserRouter([
{
	path:"/",
	Element:<AppLayout/>,
	children:[
		{
			index:true,
			Element:<Dashboard/>
		},
		{
			path:"bookings",
			Element:<Bookings/>
		},
		{
			path:"cabins",
			Element:<Cabins/>
		},
		{
			path:"users",
			Element:<Users/>
		},
		{
			path:"settings",
			Element:<Settings/>
		},
		{
			path:"account",
			Element:<Account/>
		},
	]
},
	{
		path:"login",
		Element:<Login/>
	}
])
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles/>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
