import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../../services";
import {carActions} from "../../store";
import {Car} from "./Car";


const Cars = () => {
    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carActions.setCars(data)))
    }, [dispatch]);
console.log(cars)
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};