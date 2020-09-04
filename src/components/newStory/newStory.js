import React from 'react';


export const NewStory = ({title, by, score, comment, storyUrl}) => {

    const com = comment && comment.length;

    

    return (
        
        <div class="news-reviews">
            <div class="news">
                <div class="news__title">     
                    <a class="news__title-url" href={storyUrl}>{title}</a>                 
                </div>


                <div class="news__author">
                    <div class="news__author-box">
                        <div class="news__author-name">
                                <div> 
                                    <div>{by}</div>
                                </div>
                            
                        </div>
                            <p class="news__author-comments">{com ? comment && comment.length : 0} comment</p>
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

