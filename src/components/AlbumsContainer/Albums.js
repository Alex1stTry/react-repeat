import {Album} from "./Album";
import {useEffect, useState} from "react";
import {albumsService} from "../../services/AlbumsService";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAll().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};