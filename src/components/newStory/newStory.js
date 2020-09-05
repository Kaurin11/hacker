import React from 'react';

import {withRouter} from 'react-router-dom';
import { getCommentsUrl } from '../../utils/constants/routerConstants';

const NewStory = ({title, by, score, comment, storyUrl, history}) => {

    const com = comment && comment.length;

    const commentHandler = (e) => {
        e.preventDefault();

        history.push(getCommentsUrl())
    }

    return (
        
        <div class="news-reviews">
            <div class="news">
                <div class="news__title">     
                    <a style={{display: "table-cell"}} 
                       target="_blank"  
                       href={storyUrl}
                       class="news__title-url">{title}</a>                 
                </div>


                <div class="news__author">
                    <div class="news__author-box">
                        <div class="news__author-name">
                                <div> 
                                    <div>{by}</div>
                                </div>
                        </div >
                        <p onClick={commentHandler} class="news__author-comments">{com ? comment && comment.length : 0} comment</p>
                    </div>

                    <div class="news__score">
                            <div>
                                <div>{score} points</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default withRouter(NewStory);
