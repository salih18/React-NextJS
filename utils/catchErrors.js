const catchErrors = (error, displayError) => {
  let errorMsg;
  if (error.response) {
    errorMsg = error.response.data;
    console.log('Error response', errorMsg);
    // for cloudinary image upload
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    errorMsg = error.request;
    console.log('Error request', errorMsg);
  } else {
    errorMsg = error.message;
    console.log('Error message', errorMsg);
  }
  displayError(errorMsg);
};

export default catchErrors;
