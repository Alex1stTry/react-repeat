import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import {Post} from "../Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [details, setDetails] = useState(null)

    useEffect(() => {
        postsService.getAll().then(({data})=>setPosts(data))
    }, []);

    const getDetails =(post)=>{
        setDetails(post)
    }
    return (
        <div className={css.PostsContainer}>
            {posts.map(post=><Post key={post.id} post={post} getDetails={getDetails} />)}
            <hr/>
            {details && <PostDetails details={details} />}
        </div>
    );
};

export {
    Posts
};