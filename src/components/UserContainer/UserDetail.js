import {useNavigate} from "react-router-dom";

const UserDetail = ({user}) => {
    const {id,name,username,email,address} = user;
    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {address.city}</div>
            <div>street: {address.street}</div>
            <button onClick={()=>navigate(`posts`)}>Posts of current user</button>
        </div>
    );
};

export {UserDetail};