import css from './Cars.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../store";

const Car = ({car}) => {
    const {id,brand,price,year} = car;

    const dispatch = useDispatch();



    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>delete</button>
        </div>
    );
};

export {Car};