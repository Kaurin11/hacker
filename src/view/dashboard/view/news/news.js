import React, { useState, useEffect } from 'react';
import {
  getStorys,
  getStoryId,
  getComments,
  getComment,
} from '../../../../service/newsService';
import Story from '../../../../components/story/story';

import Button from '../../../../components/button/button';
import newStory from '../../../../components/newStory/newStory';

const News = () => {
  const [news, setNews] = useState([]);
  const [visiable, setVisiable] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getStorys();
    const backendStorysIds = data.data;
    console.log(data, 'data');
    console.log(backendStorysIds, 123);

    const firstStories = backendStorysIds.slice(0, 4);
    Promise.all(firstStories.map((id) => getStoryId(id))).then((data) => {
      setNews(data.map((response) => response.data));

      setLoading(true);

      console.log(
        data.map((res) => res.data),
        456
      );
    });
  };

  console.log(news, 'aloo');

  const moreStoryHandler = (e) => {
    e.preventDefault();

    setVisiable(visiable + 4);
  };

  return (
    <div class="section-main">
      {/* {loading ? (
        news
          .slice(0, visiable)
          .map((newsStory) => (
            <Story
              key={newsStory.id}
              storyUrl={newsStory.url}
              title={newsStory.title}
              by={newsStory.by}
              score={newsStory.score}
              kids={newsStory.kids}
              comment={newsStory.kids}
            />
          ))
      ) : (
        <Bootstrap.Spinner animation="grow" />
      )} */}
      {news.map((newsStory) => {
        return (
          <Story
            key={newsStory.id}
            storyUrl={newsStory.url}
            title={newsStory.title}
            by={newsStory.by}
            score={newsStory.score}
            kids={newsStory.kids}
            comment={newsStory.kids}
            storyId={newsStory.id}
          />
        );
      })}

      <div class="btn-box-more">
        <Button onClick={moreStoryHandler} name={'More'} />
      </div>
    </div>
  );
};

export default News;
