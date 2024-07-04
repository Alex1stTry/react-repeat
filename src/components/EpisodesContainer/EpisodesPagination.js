import {useSearchParams} from "react-router-dom";

import css from './Episodes.module.css'

const EpisodesPagination = ({page, next, prev}) => {

    const [, setQuery] = useSearchParams({page: '1'});

    const nextPage = () => {
        setQuery(value => {
            value.set('page', (+value.get('page') + 1).toString())
            return value
        })
    }
    const prevPage = () => {
        setQuery(value => {
            value.set('page', (+value.get('page') - 1).toString())
            return value
        })
    }

    return (
        <div className={css.ButtonBlock}>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <h4>Current Page: {page}</h4>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    );
};

export {EpisodesPagination};