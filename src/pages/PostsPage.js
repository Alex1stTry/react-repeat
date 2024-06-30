import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {Post} from "../components/PostsContainer/Post";
import {postsService} from "../services/PostsService";

const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postsService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post} />}
        </div>
    );
};

export {PostsPage};