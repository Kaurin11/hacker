import React from 'react';

const MobHeader = () => {

    return(
        
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">New</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Past</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Comments</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Ask</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Show</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Job</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Submit</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default MobHeader;