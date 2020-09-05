import React,{useState, useEffect} from 'react';
import {getStorys, getStoryId} from '../../../../service/newsService';
import Story from '../../../../components/story/story';

import Button from '../../../../components/button/button';


const News = () => {
    const [news, setNews] = useState([]);
    const [visiable, setVisiable] = useState(3);

    //consol.log(news);

    useEffect(() => {
       getData();
    }, []);

    const getData = async () => {
        const data = await getStorys();
        const backendStorysIds = data.data;
        console.log(backendStorysIds)

        const firstStories = backendStorysIds;
         Promise.all(firstStories.map(id => getStoryId(id))).then(data => {
            setNews(data.map(response => response.data))
            console.log(data.map(response => response.data))
        })

    }

    const moreStoryHandler = (e) =>  {
        e.preventDefault();

        setVisiable(visiable + 3)
        }

    
    
   

    return (

        <div class="section-main">                        
            {news.slice(0, visiable).map(newsStory => ( 
                <Story key={newsStory.id} storyUrl={newsStory.url}  title={newsStory.title} by={newsStory.by} score={newsStory.score} comment={newsStory.kids}/>
            ))}

            <div class="btn-box-more">
                <Button   onClick={moreStoryHandler} name={'More'} />
            </div>
        </div> 
    )
    
}

export default News;