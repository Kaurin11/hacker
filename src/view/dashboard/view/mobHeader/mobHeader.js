import React from 'react';

const MobHeader = () => {

    return(
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link">New</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Past</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Comments</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Ask</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Show</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Job</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Submit</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default MobHeader;