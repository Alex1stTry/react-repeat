import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UserDetail} from "../components/UserContainer/UserDetail";

const UserDetailsPage = () => {
    const [userDetail, setUserDetail] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        userService.getById(id).then(({data})=>setUserDetail(data))
    }, [id]);

    
    return (
        <div>
            {userDetail && <UserDetail key={userDetail.id} user={userDetail}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};