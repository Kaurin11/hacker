import React from 'react';

import {withRouter} from 'react-router-dom';
import { getCommentsUrl, getLoginUrl, getNewNewsUrl, getNewsUrl } from '../../../../utils/constants/routerConstants';

import './style.scss';

const Header = (props) => {

    const commentsHandler = (e) => {
        e.preventDefault();
        props.history.push(getCommentsUrl());
    }

    const newNewsHandler = (e) => {
        e.preventDefault();
        props.history.push(getNewNewsUrl());
    }

    const loginHandler = (e) => {
        e.preventDefault();
        props.history.push(getLoginUrl());
    }

    const topStoryHandler = (e) => {
        e.preventDefault();
        props.history.push(getNewsUrl());
    }

    

    return (
        
           <div class="header ">
                <div class="header__logo-box">
                    <img class="header__logo" onClick={topStoryHandler} src={"/img/logo-white.png"} alt="Logo" />
                </div>

                <div class="header__text-box" >
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Hackers News</span>
                    </h1>
                </div>
                
                
                <div class="header__nav-box" >
                    <ul class="nav__links">
                        <li><a href="#" onClick={newNewsHandler}>New</a></li>
                        <li><a href="#" >Past</a></li>
                        <li><a href="#" onClick={commentsHandler}>Comments</a></li>
                        <li><a href="#">Ask</a></li>
                        <li><a href="#">Show</a></li>
                        <li><a href="#">Job</a></li>
                        <li><a href="#">Submit</a></li>
                    </ul>
                </div>

                <div class="btn-box-more">
                    <a href="#" class="btn btn--white btn--animated" onClick={loginHandler}> Login </a>
                </div>
                
           
            </div>
        
    )
}

export default withRouter(Header);