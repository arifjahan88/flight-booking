const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
      console.log(err);
    });
  };
};

module.exports = asyncHandler;
