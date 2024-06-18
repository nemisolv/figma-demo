import axios from 'axios';

export const getPreviewStoryById = async (id) => {
  return await axios.get(`http://localhost:8080/stories/preview/${id}`);
};

export const getStoryById = async  (id) => {
    return await axios.get(`http://localhost:8080/stories/${id}`);
    };

export const getStories = async () => {
  return await axios.get('http://localhost:8080/stories');
};
