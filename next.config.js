// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://salih123:salih123456@reactreverse-jujyz.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'mySecretKey',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/reactreserveproject/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_jVeT0lTrpmXFUSrMzkLcDq0g00l9BadkRU',
  },
};
