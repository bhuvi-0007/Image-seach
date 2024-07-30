import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGE_URL = 'https://api.unsplash.com/photos';
const API_KEY = process.env.REACT_APP_API_KEY; 
console.log(API_KEY,"API_KEY")
export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: API_KEY,
      },
    });
    return {
      images: response.data.results,
      totalPages: Math.ceil(response.data.total / 10),
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return { images: [], totalPages: 1 };
  }
};

export const fetchImageDetails = async (imageId) => {
  try {
    const response = await axios.get(`${IMAGE_URL}/${imageId}`, {
      params: {
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching image details:', error);
    return null;
  }
};
