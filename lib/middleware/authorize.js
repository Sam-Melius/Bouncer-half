module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'

  try {
    const { admin } = req.cookies;
   
    req.user = admin;

    next();
  } catch (error) {
    error.message = 'You must be signed in to continue';
    error.status = 403;
    next(error);
  }
};
