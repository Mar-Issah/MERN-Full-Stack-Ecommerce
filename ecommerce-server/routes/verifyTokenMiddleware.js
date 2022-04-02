const jwt = require('jsonwebtoken');

//verify the token from the headers coming from the client
//use jwt.verify to verify the token
//we the the user which contains the id and isAdmin fields
const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    // const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json('Invalid token!');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('Not authenticated!');
  }
};

//below will be used as the middlewar
//for user who is has an account or an admin
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
    }
  });
};

//for the login user who is an admin specifically not just an account owner/member/

//admin are able to add new product
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not an Admin!');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
