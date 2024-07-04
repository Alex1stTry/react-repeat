import css from './Episodes.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hoc";

const Episode = ({episode}) => {
    const {id, name: episodeName, episode: chapter, characters} = episode;

    const {setEpisodeName} = useAppContext();

    const nav = useNavigate();

    const getCharacterIdAndNav = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',')
        setEpisodeName(episodeName)
        nav(`/characters/${ids}`)
    }

    return (
        <div onClick={getCharacterIdAndNav} className={css.Episode}>
            <h2>id: {id}</h2>
            <h2>name: {episodeName}</h2>
            <h2>chapter: {chapter}</h2>
        </div>
    );
};

export {Episode};