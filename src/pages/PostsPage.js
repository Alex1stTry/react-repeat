import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {commentsService} from "../services/CommentsService";
import {Post} from "../components/PostsContainer/Post";

const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state:{post_id}} = useLocation();

    useEffect(() => {
        commentsService.getPostByCommentId(post_id).then((data)=>setPost(data))
    }, [post_id]);
    return (
        <div>
            {post && <Post post={post} />}
        </div>
    );
};

export {PostsPage};