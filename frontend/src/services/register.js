import axios from 'axios';

const baseUrl = '/register';

const handleRegister = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  console.log('services', res);
  return res.data;
};

export default {
  handleRegister,
};
