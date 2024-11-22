const asyncHandler = require("../utils/asyncHandler");
const { createError } = require("../utils/errorHandler");

const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    if (!req.user) {
      throw createError(401, "You are not Authenticate!");
    }

    const { role } = req.user;

    if (role !== "admin") {
      throw createError(401, "You are not Authenticate!");
    }

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = verifyToken;
