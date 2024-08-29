export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const expiresInMilliseconds = process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000; // Assuming COOKIE_EXPIRE represents number of days
  
  const options = {
    expires: new Date(Date.now() + expiresInMilliseconds),
    httpOnly: true, 
    // secure : true /  https  mate a pan devanu
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
}; 
