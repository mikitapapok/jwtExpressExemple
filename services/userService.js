const userModel = require("../modules/userModel");
const TokenService = require("./tokenService");
const crypt = require("bcrypt");

class UserService {
  async userRegistration(email, password, role) {
    const currentUser = await userModel.findOne({ email: email });
    if (currentUser) {
      return "takoy uzhe estj";
    }
    const cryptPassword = await crypt.hash(password, 6);
    const newUser = await await userModel.create({
      email: email,
      password: cryptPassword,
      role,
    });
    newUser.save();
    return newUser;
  }
  async userLogin(email, password) {
    const isUserFound = await userModel.findOne({ email: email });
    if (!isUserFound) {
      return "ne najden";
    }
    const isPasswordValid = await crypt.compare(password, isUserFound.password);
    if (!isPasswordValid) {
      return "nea";
    }
    const tokens = await TokenService.createToken(isUserFound);
    return tokens;
  }
}

module.exports = new UserService();
