import {useEffect, useState} from "react";
import {carService} from "../../services/carService";
import {CarComponent} from "./Car.component";

const CarsComponent = ({cars,setTrigger,setCarUpdate}) => {

    return (
        <div>
            {cars.map(car=><CarComponent key={car.id} car={car} setTrigger={setTrigger} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {CarsComponent};