import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Field, useField} from "formik";
import s from './inputs.module.scss';
import cn from "classnames";
import ru from 'date-fns/locale/ru';

export const DatePickerField = (props) => {
  const [startDate, setStartDate] = useState(null);
  const {label, name} = props;
  const [, meta] = useField(props);
  let inputClassNames = cn(s.input__container, meta.touched && meta.error ? s.validation__error : null);

  return (
    <div className={inputClassNames}>
      <label className={cn(s.form__label, startDate && s.top__label)} htmlFor={name}>{label}</label>
      <Field name={name} >
        {
          ({form, field}) => {
            const {setFieldValue} = form;
            const {value} = field;

            return (
              <div  className='custom__picker'>
                <DatePicker
                  className={s.form__input}
                  locale={ru}
                  {...field}
                  {...props}
                  selected={value}
                  onChange={e => {
                    setFieldValue(name, e)
                    setStartDate(e)
                  }}
                />
                <div className={s.calendar__icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                       data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14" role="img"
                       viewBox="0 0 448 512">
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
                  </svg>
                </div>
                {meta.touched && meta.error ? (
                  <div className={s.error}>{meta.error}</div>
                ) : null}
              </div>
            )
          }
        }
      </Field>
    </div>
  );
};
