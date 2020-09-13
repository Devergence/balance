import React from 'react';
import {useField} from "formik";
import s from './inputs.module.scss';
import cn from "classnames";

export const SimpleInput = (props) => {
  const {label, name} = props;
  const [field, meta] = useField(props);
  let inputClassNames = cn(s.input__container, meta.touched && meta.error ? s.validation__error : null);

  return (
    <div className={inputClassNames}>
      <input className={s.form__input} {...field} {...props} placeholder='.'/>
      <label className={s.form__label} htmlFor={name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}
