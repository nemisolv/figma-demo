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


export const addStory = async( data)  => {
  return await axios.post('http://localhost:8080/stories', data);
}

export const updateStory = async (id, data) => {
  return await axios.put(`http://localhost:8080/stories/${id}`, data);
}

export const deleteStory = async (id) => {
  return await axios.delete(`http://localhost:8080/stories/${id}`);
}

// export const getStoryByCategory = async (category) => {
//   return await axios.get(`http://localhost:8080/stories/category/${category}`);
// }


// export const getStoryByAuthor = async (author) => {
//   return await axios.get(`http://localhost:8080/stories/author/${author}`);
// }
