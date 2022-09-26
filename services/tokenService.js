const jwt = require("jsonwebtoken");
const tokenModel = require("../modules/tokenModel");
class TokenService {
  async createToken(payload) {
    const accessToken = jwt.sign({ ...payload }, process.env.PRIVATE_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign({ ...payload }, process.env.PRIVATE_KEY, {
      expiresIn: "30d",
    });

    const addToket = await tokenModel.create({
      id: payload._id,
      token: refreshToken,
    });
    addToket.save();
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService();
