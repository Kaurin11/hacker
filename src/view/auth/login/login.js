import React from 'react';

import { useFormik } from 'formik';

import { withRouter } from 'react-router-dom';
import { getNewsUrl } from '../../../utils/constants/routerConstants';

import Button from '../../../components/button/button';

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);

    props.history.push(getNewsUrl());
  };

  return (
    <section className="section-login">
      <div className="row">
        <div className="login">
          <div className="login__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-login">Log in</h2>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Email adress"
                  className="form__input"
                  name="email"
                  id="email"
                  required
                  {...formik.getFieldProps('email')}
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="password"></label>
                <input
                  type="text"
                  placeholder="Password"
                  className="form__input"
                  name="password"
                  id="password"
                  required
                  {...formik.getFieldProps('password')}
                />
              </div>

              <Button className="btn-login" onClick={loginHandler} name={'Login'} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Login);
