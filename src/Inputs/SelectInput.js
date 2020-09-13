import React from 'react';
import Select  from 'react-select';
import cn from "classnames";
import s from "./inputs.module.scss";
import {Field} from "formik";

const options = [
  { value: 'man', label: 'Мужчина' },
  { value: 'woman', label: 'Женщина' }
]

const components = {
  DropdownIndicator: null,
};

export const SelectInput = ({label, name}) => {
  return (
    <div className={cn(s.input__container, s.select__container)}>
      <label className={s.form__label} htmlFor={name}>{label}</label>
      <Field name={name} >
        {
          ({form}) => {
            const {setFieldValue} = form;
            return (
              <Select
                className='select__style'
                classNamePrefix="custom__select"
                isSearchable={false}
                components={components}
                options={options}
                defaultValue={options[0]}
                onChange={value => setFieldValue(name, value.value)}
              />
            )
          }
        }
      </Field>
    </div>
  );
};
