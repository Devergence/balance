import React from 'react';
import InputMask from 'react-input-mask';
import {Field, useField} from "formik";
import s from "./inputs.module.scss";
import cn from "classnames";

export const MaskedInput = (props) => {
  const {label, name} = props;
  const [field, meta] = useField(props);
  let inputClassNames = cn(s.input__container, meta.touched && meta.error ? s.validation__error : null);

  return (
    <div className={inputClassNames}>
      <Field name={name} >
        {
          ({form}) => {
            const {setFieldValue} = form;
            return (
              <>
                <InputMask
                  className={s.form__input}
                  {...field}
                  {...props}
                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/\+/g, "")
                      .replace(/ /g, "");
                    setFieldValue(name, changedValue);
                  }}
                  placeholder='.'
                />
                <label className={s.form__label} htmlFor={name}>{label}</label>
                {meta.touched && meta.error ? (
                  <div className={s.error}>{meta.error}</div>
                ) : null}
              </>
            )
          }
        }
      </Field>
    </div>
  );
};
