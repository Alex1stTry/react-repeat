import css from './Character.module.css'

const Character = ({character}) => {
    const {id, name, image} = character;


    return (
        <div className={css.Character}>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};