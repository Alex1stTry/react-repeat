import css from './Post.module.css'

const Post = ({post,getDetails}) => {
    const {id,title} = post
    return (
        <div className={css.Post}>
            <h2>id:{id}</h2>
            <h2>title:{title}</h2>
            <button onClick={()=>getDetails(post)}>Details</button>
        </div>
    );
};

export {Post};