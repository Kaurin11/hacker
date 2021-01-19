import React from 'react';

import { withRouter } from 'react-router-dom';
import {
  getCommentsUrl,
  getLoginUrl,
  getNewNewsUrl,
  getNewsUrl,
} from '../../../../utils/constants/routerConstants';

import './style.scss';

const Header = (props) => {
  const commentsHandler = (e) => {
    e.preventDefault();
    props.history.push(getCommentsUrl());
  };

  const newNewsHandler = (e) => {
    e.preventDefault();
    props.history.push(getNewNewsUrl());
  };

  const loginHandler = (e) => {
    e.preventDefault();
    props.history.push(getLoginUrl());
  };

  const topStoryHandler = (e) => {
    e.preventDefault();
    props.history.push(getNewsUrl());
  };

  return (
    <div className="header ">
      <div className="header__logo-box">
        <img
          className="header__logo"
          onClick={topStoryHandler}
          src={'/img/logo-white.png'}
          alt="Logo"
        />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hackers News</span>
        </h1>
      </div>

      <div className="header__nav-box">
        <ul className="nav__links">
          <li>
            <a href="#" onClick={newNewsHandler}>
              New
            </a>
          </li>
          <li>
            <a href="#">Past</a>
          </li>
          <li>
            <a href="#" onClick={commentsHandler}>
              Comments
            </a>
          </li>
          <li>
            <a href="#">Ask</a>
          </li>
          <li>
            <a href="#">Show</a>
          </li>
          <li>
            <a href="#">Job</a>
          </li>
          <li>
            <a href="#">Submit</a>
          </li>
        </ul>
      </div>

      <div className="btn-box">
        <a href="#" className="btn btn--white btn--animated" onClick={loginHandler}>
          {' '}
          Logout{' '}
        </a>
      </div>
    </div>
  );
};

export default withRouter(Header);
