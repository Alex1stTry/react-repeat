import {useNavigate} from "react-router-dom";

import css from './Comments.module.css'

const Comment = ({comment}) => {
    const {postId, id, email, name, body} = comment;

    const navigate = useNavigate();
    return (
        <div className={css.Comments}>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>email:{email}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
            <button onClick={() => navigate('post', {state: {postId}})}>getPost</button>
        </div>
    );
};

export {Comment};