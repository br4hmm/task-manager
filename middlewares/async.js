const asyncWrapper = func => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (err) {
      err.status = 500;
      next(err);
    }
  };
};

module.exports = asyncWrapper;
