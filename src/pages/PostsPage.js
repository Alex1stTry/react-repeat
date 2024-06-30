import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../services/postsService";
import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams();

    useEffect(() => {
        postsService.getByUserId(id).then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
           <Posts posts={posts}/>
        </div>
    );
};

export {PostsPage};