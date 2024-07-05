import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";
import {Car} from "./Car";


const Cars = () => {
    const {cars,trigger} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch,trigger]);
    console.log(cars)
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};