import React from 'react';

import {useFormik} from 'formik';

import {withRouter} from 'react-router-dom';
import {getNewsUrl} from '../../../utils/constants/routerConstants';

import Button from '../../../components/button/button';

const Login = (props) => {

    const formik = useFormik ({
        initialValues : {
            username : '',
            password : ''
        }
    })

    const loginHandler = (e) => {
        e.preventDefault();
        console.log(formik.values);

        props.history.push(getNewsUrl());
    }

    return (
        <section class="section-login">
            <div class="row">
                <div class="login">
                    <div class="login__form">

                        <form action="#" class="form">

                            <div class="u-margin-bottom-medium">
                                <h2 class="heading-login">
                                    Log in
                                </h2>
                            </div>

                            <div class="form__group">
                                <label class="form__label" for="username"></label>
                                <input 
                                    type="text"
                                    placeholder="User Name"  
                                    class="form__input"
                                    name="username"
                                    id="username"
                                    required
                                    {...formik.getFieldProps('username')} />
                            </div>

                            <div class="form__group">
                                <label class="form__label" for="password"></label>
                                <input
                                    type="email"
                                    placeholder="Email adress" 
                                    class="form__input"
                                    name="password"
                                    id="password"
                                    required 
                                    {...formik.getFieldProps('password')} />
                            </div>

                            <Button class="btn-login" onClick={loginHandler} name={'Login'} />

                        </form>

                    </div>
                </div>
            </div>
        </section>
        


    )
    
}

export default withRouter(Login);