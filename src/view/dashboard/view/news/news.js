import React,{useState, useEffect} from 'react';
import {getStorys, getStoryId} from '../../../../service/newsService';
import { Story } from '../../../../components/story/story';

const News = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
       getData();
    }, []);

    const getData = async () => {
        const data = await getStorys();
        const backendStorysIds = data.data;

        const firstStories = backendStorysIds.slice(0, 10);
         Promise.all(firstStories.map(id => getStoryId(id))).then(data => {
            setNews(data.map(response => response.data))
            console.log(data.map(response => response.data))
        })

    }
   


    return (

        
        
        <div class="section-main">                        
            {news.map(newsStory => (
                <Story title={newsStory.title} by={newsStory.by} score={newsStory.score} />
            ))}
        </div> 
    )
    
}

export default News;