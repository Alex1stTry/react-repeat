import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        'string.pattern.base' : 'Only letters min 1 max 20',
    }),
    price: Joi.number().min(0).max(1_000_000).messages({
        'number.min':'minimal 0',
        'number.max':'maximum 1.000.000'
    }),
    year:Joi.number().required().min(1990).max(new Date().getFullYear()).messages({
       'number.min':'minimal year 1990',
       'number.max':'maximum current year'
    })
})
export {
    carValidator
}