// utils/responseFormatter.js

const formatResponse = (success, msg, data = null) => {
    return {
      success,
      msg,
      data,
    };
  };
  
  module.exports = formatResponse;
  