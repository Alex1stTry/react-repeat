import {carService} from "../../services/carService";

const CarComponent = ({car, setTrigger, setCarUpdate}) => {
    const {id, brand, price, year} = car;
    const remove = async (id) => {
        await carService.delete(id)
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setCarUpdate(car)}>update</button>
            <button onClick={() => remove(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {CarComponent};