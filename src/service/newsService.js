import Axios from 'axios';


export const baseRequest = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesRequest = `${baseRequest}topstories.json`;
export const storyRequest = `${baseRequest}item`;
export const commentsRequest = `${baseRequest}kids`;

export const getStorys = () => Axios.get(newStoriesRequest);
export const getStoryId = (id) => Axios.get(`${storyRequest}/${id}.json`);

export const getComments = () => Axios.get(commentsRequest);

