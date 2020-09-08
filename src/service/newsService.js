import Axios from 'axios';

export const baseRequest = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesRequest = `${baseRequest}topstories.json`;
export const newNewsRequest = `${baseRequest}newstories.json`;

export const storyRequest = `${baseRequest}item`;
export const newsRequest = `${baseRequest}item`;

export const getStorys = () => Axios.get(newStoriesRequest);
export const getStoryId = (id) => Axios.get(`${storyRequest}/${id}.json`);

export const getNewStorys = () => Axios.get(newNewsRequest);
export const getNewsId = (id) => Axios.get(`${newsRequest}/${id}.json`);

export const getComment = (id) => Axios.get(`${newsRequest}/${id}.json`);
