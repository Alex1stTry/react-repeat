const Post = ({post}) => {
    const {postId, id, name, email, body} = post;
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};