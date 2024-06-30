const Post = ({post}) => {
    const {userId, id, title,body} = post;
    console.log(post)
    console.log(body)
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};