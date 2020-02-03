const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://salih-react-shop.salihsert18.now.sh'
    : 'http://localhost:3000';

export default baseUrl;
