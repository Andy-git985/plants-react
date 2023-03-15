import axios from 'axios';

const baseUrl = '/api';

const getItems = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getItems };
