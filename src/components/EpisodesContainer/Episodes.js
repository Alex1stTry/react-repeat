import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {EpisodesPagination} from "./EpisodesPagination";
import {episodesService} from "../../services";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState({next: null, prev: null, results: []})

    const [query] = useSearchParams({page: '1'});

    const page = query.get('page')

    useEffect(() => {
        episodesService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {next, prev}, results} = data;
            return {
                next, prev, results
            }
        }))
    }, [page]);

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.results && episodes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <EpisodesPagination page={page} next={episodes.next} prev={episodes.prev}/>
        </div>
    )
};

export {Episodes};