const jwt = require("jsonwebtoken");
module.exports = function (role) {
  const currentRole = role;
  return function (req, res, next) {
    try {
      const a = jwt.verify(req.cookies.TokenCookie, process.env.PRIVATE_KEY);

      if (currentRole !== a._doc.role) {
        throw Error({ message: "aaaaaaaaaaaaa" });
      }
      res.send(a._doc.role);
      next();
    } catch (error) {
      res.send("aaaaaaaaaaaaaaaaa");
    }
  };
};
