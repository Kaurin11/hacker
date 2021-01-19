import React, { useState, useEffect } from 'react';
import { getStorys, getStoryId } from '../../../../service/newsService';
import Story from '../../../../components/story/story';

import Button from '../../../../components/button/button';

const News = () => {
  const [news, setNews] = useState([]);
  const [newsIds, setNewsIds] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getStorys();
    const newsStoriesIds = data;
    setNewsIds(newsStoriesIds);

    // newsStoriesIds.forEach(id => {
    //  const {data} = await getStoryId(id)
    //  setNews([...news, data])
    // })
    const newsRequests = newsStoriesIds.slice(0, 4).map((id) => getStoryId(id));

    Promise.all(newsRequests).then((promiseAllResponse) => {
      const allData = promiseAllResponse.map((response) => response.data);
      setNews(allData);
      setLoading(true);
      console.log(loading)
    });
  };

  useEffect(() => {
    const newNewsStoriesIds = newsIds.slice(counter * 4, counter * 4 + 4);
    const newNewsStoriesRequests = newNewsStoriesIds.map((id) =>
      getStoryId(id)
    );
    Promise.all(newNewsStoriesRequests).then((promiseAllResponse) => {
      const allData = promiseAllResponse.map((response) => response.data);
      setNews([...news, ...allData]);
    });
  }, [counter]);

  const moreStoryHandler = (e) => {
    e.preventDefault();

    setCounter(counter + 1);
  };

  return (
    <div className="section-main">
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

      <div className="btn-box-more">
        <Button onClick={moreStoryHandler} name={'More'} />
      </div>
    </div>
  );
};

export default News;
