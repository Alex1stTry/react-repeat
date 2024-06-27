import React from 'react';

const Character = ({character}) => {
    const {name,status,url} = character;
    return (
        <div>
           <h1>{name}</h1>
           <h1>{status}</h1>
            <img src={url} alt={name}/>
        </div>
    );
};

export default Character;