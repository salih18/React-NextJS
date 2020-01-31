const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://salih-react-shop.now.sh'
    : 'http://localhost:3000';

export default baseUrl;
