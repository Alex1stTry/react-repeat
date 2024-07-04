import css from './Header.module.css'
import {useAppContext} from "../../hoc";


const Header = () => {
    const {episodeName} = useAppContext();

console.log(episodeName)

    return (
        episodeName?
            (
                <div className={css.Header}>
                    <h1>{episodeName}</h1>
                </div>
            )
            :
            (
                <div className={css.Header}>
                    <h1>Rick & Morty</h1>
                </div>
            )


    );
};

export {
    Header
};