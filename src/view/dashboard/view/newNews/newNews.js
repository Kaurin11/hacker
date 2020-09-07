import React, { useState, useEffect } from 'react';
import { getNewStorys, getNewsId } from '../../../../service/newsService';
import NewStory from '../../../../components/newStory/newStory';
import Button from '../../../../components/button/button';

const NewNews = () => {
  const [news, setNews] = useState([]);
  const [visiable, setVisiable] = useState(3);

  //consol.log(news);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getNewStorys();
    const backendStorysIds = data.data;
    console.log(backendStorysIds);

    const firstStories = backendStorysIds.slice(0, 10);
    Promise.all(firstStories.map((id) => getNewsId(id))).then((data) => {
      setNews(data.map((response) => response.data));
      console.log(data.map((response) => response.data));
    });
  };

  const moreStoryHandler = (e) => {
    e.preventDefault();

    setVisiable(visiable + 3);
  };

  return (
    <div class="section-main">
      {news.slice(0, visiable).map((newsStory) => (
        <NewStory
          key={newsStory.id}
          storyUrl={newsStory.url}
          title={newsStory.title}
          by={newsStory.by}
          score={newsStory.score}
          comment={newsStory.kids}
        />
      ))}

      <div class="btn-box-more">
        <Button onClick={moreStoryHandler} name={'More'} />
      </div>
    </div>
  );
};

export default NewNews;
