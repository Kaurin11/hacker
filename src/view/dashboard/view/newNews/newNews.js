import React,{useState, useEffect} from 'react';
import {getNewStorys, getNewsId} from '../../../../service/newsService';
import NewStory from '../../../../components/newStory/newStory';



const NewNews = () => {
    const [news, setNews] = useState([]);

    //consol.log(news);

    useEffect(() => {
       getData();
    }, []);

    const getData = async () => {
        const data = await getNewStorys();
        const backendStorysIds = data.data;
        console.log(backendStorysIds)

        const firstStories = backendStorysIds.slice(0, 10);
         Promise.all(firstStories.map(id => getNewsId(id))).then(data => {
            setNews(data.map(response => response.data))
            console.log(data.map(response => response.data))
        })

    }
   

    return (

        <div class="section-main">                        
            {news.map(newsStory => ( 
                <NewStory key={newsStory.id} storyUrl={newsStory.url}  title={newsStory.title} by={newsStory.by} score={newsStory.score} comment={newsStory.kids}/>
            ))}
        </div> 
    )
    
}

export default NewNews;