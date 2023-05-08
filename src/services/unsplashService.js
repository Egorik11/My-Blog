import axios from 'axios';

const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
const unsplashAPiUrl = 'https://api.unsplash.com/photos';

const createAxiosInstance = () => {
  return axios.create({
    baseURL: unsplashAPiUrl,
    headers: {
      Authorization: `Client-ID ${unsplashApiKey}`,
    },
  });
};

const axiosInstance = createAxiosInstance();

const searchUnsplashImages = async (query) => {
  try {
    const response = await axiosInstance.get('', {
      params: {
        query,
      },
    });
    const data = Object.values(response.data);
    return data;
  } catch (error) {
    console.error('Error searching Unsplash images:', error);
    return [];
  }
};

const unsplashService = { searchUnsplashImages };

export default unsplashService;
