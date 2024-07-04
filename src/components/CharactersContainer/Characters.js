import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {characterService} from "../../services";
import {Character} from "./Character";
import css from './Character.module.css'
import {useAppContext} from "../../hoc";


const Characters = () => {
    const [characters, setCharacters] = useState([])

    const {ids} = useParams();
    const {setEpisodeName} = useAppContext();

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids]);

    const nav = useNavigate();


    const back = () =>{
        nav(-1)
        setEpisodeName(null)
    }

    return (
        <div>
            <div
            className={css.Button}>
                <button onClick={back}>Back</button>
            </div>
            <div className={css.CharacterContainer}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};