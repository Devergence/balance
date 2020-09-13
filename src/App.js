import s from './form.module.scss';
import "./globalStyles.scss";
import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { DatePickerField } from "./Inputs/DatePickerField";
import { SimpleInput } from "./Inputs/SimpleInput";
import { MaskedInput } from "./Inputs/MaskedField";
import { SelectInput } from "./Inputs/SelectInput";
import "yup-phone";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const  App = () => {
  return (
    <div className={s.form__container}>
      <h1>Информация о сотруднике</h1>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          name: "",
          surname: "",
          patronymic: "",
          sex: "man",
          birthday: null,
          email: "",
          phone: "",
          registration: "",
          hirer: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Поле является обязательным"),
          surname: Yup.string().required("Поле является обязательным"),
          birthday: Yup.date().required("Поле является обязательным").nullable(),
          email: Yup.string()
            .email("Введен некорректный адрес почты")
            .required("Поле является обязательным"),
          phone: Yup.string()
            .matches(phoneRegExp, 'Неверный номер')
            .required("Поле является обязательным")
        })}

        onSubmit={()=> alert('Форма валидна, отправляется запрос')}
      >
        <Form className={s.form}>
          <SimpleInput
            name="surname"
            type="text"
            label="Фамилия"
          />
          <SimpleInput
            name="name"
            type="text"
            label="Имя"
          />
          <SimpleInput
            name="patronymic"
            type="text"
            label="Отчество"
          />
          <div className={s.half__group}>
            <SelectInput name="sex" label="Пол"/>
            <DatePickerField name="birthday" label="Дата рождения"/>
          </div>
          <div className={s.half__group}>
            <MaskedInput
              mask="+7 (999) 999-99-99"
              name="phone"
              label="Мобильный телефон"
            />
            <SimpleInput
              name="email"
              label="Email"
            />
          </div>
          <SimpleInput
            name="registration"
            type="text"
            label="Адрес постоянной регистрации"
          />
          <SimpleInput
            name="hirer"
            type="text"
            label="Название работодателя"
          />
          <button className={s.button} type="submit">Сохранить</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
