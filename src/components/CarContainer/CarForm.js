import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";
import {useEffect} from "react";

const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.cars);

    const {register, reset, setValue, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const save = (car) => {
        dispatch(carActions.create({car}))
        reset()
    }

    const updateCar = (car) => {
        dispatch(carActions.update({id: carForUpdate.id, newCar: car}))
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate,setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{carForUpdate? 'update':'save'}</button>
        </form>
    );
};

export {CarForm};