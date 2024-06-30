import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../services/postsService";
import {PostDetail} from "../components/PostsContainer/PostDetail";

const PostDetailsPage = () => {
    const {id} = useParams();

    const [postDetail, setPostDetail] = useState(null)

    useEffect(() => {
        postsService.getById(id).then(({data})=>setPostDetail(data))
    }, [id]);
    return (
        <div>
            {postDetail && <PostDetail key={postDetail.id} post={postDetail}/>}
        </div>
    );
};

export {PostDetailsPage};