import React,{useState} from 'react';
export const Story = ({title, by, score}) => {

    

    

    return (
        
        

        <div class="news-reviews">
            <div class="news">
                <div class="news__title">
                        <div>
                            <div> {title}</div>
                        </div>
                </div>

                <div class="news__author">
                    <div class="news__author-box">
                        <div class="news__author-name">
                                <div>
                                    <div>{by} </div>
                                </div>
                            
                        </div>

                        <p class="news__author-comments">25 comments</p>
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

