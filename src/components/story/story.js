import React from 'react';


export const Story = ({title, by, score, comment , storyUrl}) => {

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
                                    <div>{by} </div>
                                </div>
                        </div>

                        <p class="news__author-comments">{comment && comment.length} comments</p>
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

