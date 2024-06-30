import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post;
    const nav = useNavigate();
    return (
        <div>
            <div>title:{title}</div>
            <button onClick={()=>nav(`/posts/${id}`)}>PostDetails</button>
        </div>
    );
};

export {Post};