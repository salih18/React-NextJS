const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://shopping-app-nextjs.herokuapp.com'
    : 'http://localhost:3000';

export default baseUrl;
