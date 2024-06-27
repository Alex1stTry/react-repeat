import {useEffect, useState} from "react";
import {spaceService} from "../../services/spaceService";
import {LaunchComponent} from "../Launch/Launch.component";
import css from './Launches.module.css'

const LaunchesComponent = () => {
    const [launches,setLaunches] = useState([]);

    useEffect(() => {
       spaceService.getAll().then(({data})=>setLaunches(data))
    }, []);
    const newLaunches = launches.filter(launch=>launch.launch_year !== '2020')
    return (

        <div className={css.Launches}>
            {newLaunches.map(launch=><LaunchComponent key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {LaunchesComponent};