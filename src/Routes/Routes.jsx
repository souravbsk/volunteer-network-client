import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CreateUser from "../Layout/CreateUser";
import Login from "../Components/Login/Login";
import Dashboard from "../Layout/Dashboard";
import VolunteerList from "../Components/DashBoard/VolunteerList/VolunteerList";
import AddEvent from "../Components/DashBoard/AddEvent/AddEvent";
import VolunteerRegister from "../Components/VolunteerRegister/VolunteerRegister";
import MyEvents from "../Components/MyEvents/MyEvents";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Components/DashBoard/Dashboard/DashBoard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/myevents",
                element:<PrivateRoute><MyEvents></MyEvents></PrivateRoute>
            }

        ]
    },
    {
        path:"/bookEvent",
        element:<CreateUser></CreateUser>,
        children:[
            {
                path:":id",
                element:<PrivateRoute><VolunteerRegister></VolunteerRegister></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/events/${params.id}`)
            }
        ]
    },
    {
        path:"/",
        element:<CreateUser></CreateUser>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
    {
        path:"/",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard",
                element:<DashBoard></DashBoard>
            },
            {
                path:"/volunteer-list",
                element:<VolunteerList></VolunteerList>

            },
            {
                path:"addevent",
                element:<AddEvent></AddEvent>
            }

        ]
       
    }
])


export default router