import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {useEffect} from "react";

const CarFormComponent = ({setTrigger,carUpdate,setCarUpdate}) => {
    const {reset,register,formState:{isValid,errors},setValue,handleSubmit} = useForm({
        mode:'all'
    });
    const save = async (car) =>{
        await carService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }
    const update = async (car) =>{
       await carService.update(carUpdate.id,car)
        setTrigger(prev=>!prev)
        setCarUpdate(null)
        reset()
    }
    useEffect(() => {
        if (carUpdate){
            setValue('brand',carUpdate.brand,{shouldValidate:true})
            setValue('price',carUpdate.price,{shouldValidate:true})
            setValue('year',carUpdate.year,{shouldValidate:true})
        }
    }, [carUpdate]);

    return (
        <form onSubmit={handleSubmit(carUpdate? update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand',{
                pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                    message: 'only letters'
                }
            })}/>
            <input type="text" placeholder={'price'} {...register('price',{
                valueAsNumber:true,
                min: {value:0,message:'min 0'},
                max: {value:1_000_000,message:'max 1.000.000'}

            })}/>
            <input type="text" placeholder={'year'} {...register('year',{
                valueAsNumber:true,
                min:{value:1990, message:'minimal year 1990'},
                max:{value:new Date().getFullYear(), message:'maximum current year'}
            })}/>
            <button disabled={!isValid}>{carUpdate?'update':'save'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarFormComponent};