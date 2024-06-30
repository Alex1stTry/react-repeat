import {Users} from "../components/UserContainer/Users";
import {Outlet, useLoaderData} from "react-router-dom";

const UserPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Outlet/>
            <Users users={data}/>
        </div>
    );
};

export {UserPage};