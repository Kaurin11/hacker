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

        <form>

            <label htmlFor="username">User Name</label>
            <input 
                name="username" 
                {...formik.getFieldProps('username')} />


            <label htmlFor="password">Password</label>
            <input 
                name="password"
                {...formik.getFieldProps('password')} />

            <Button onClick={loginHandler} name={'Login'} />

        </form>


    )
    
}

export default withRouter(Login);