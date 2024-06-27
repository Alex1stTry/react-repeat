import css from './PostDetails.module.css'
const PostDetails = ({details}) => {
    const {userId,body} = details;
    return (
        <div className={css.Details}>
          <h2>{userId}</h2>
          <h2>{body}</h2>
        </div>
    );
};

export {PostDetails};