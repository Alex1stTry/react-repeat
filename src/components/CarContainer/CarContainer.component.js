import {CarFormComponent} from "./CarForm.component";
import {CarsComponent} from "./Cars.component";
import {useEffect, useState} from "react";
import {carService} from "../../services/carService";

const CarContainerComponent = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carUpdate, setCarUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger, carUpdate]);
    return (
        <div>
            <CarFormComponent setTrigger={setTrigger} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <CarsComponent cars={cars} setTrigger={setTrigger} setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export {
    CarContainerComponent
};