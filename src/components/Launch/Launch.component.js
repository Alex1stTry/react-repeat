import css from './Launch.module.css'

const LaunchComponent = ({launch}) => {
    const {mission_name,launch_year,links} = launch;
    return (
        <div className={css.Launch}>
            <h1 className={css.text}>{mission_name}</h1>
            <h2 className={css.text}>{launch_year}</h2>
            <img src={links.mission_patch_small} alt={links.mission_patch_small}/>
        </div>
    );
};

export {LaunchComponent};