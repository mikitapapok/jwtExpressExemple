const UserService = require("../services/userService");

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    const userCredentials = await UserService.userRegistration(
      email,
      password,
      role
    );
    res.send(userCredentials);
  }

  async login(req, res) {
    const { email, password } = req.body;
    const tokens = await UserService.userLogin(email, password);
    const refreshToken = tokens.refreshToken;
    res.cookie("TokenCookie", refreshToken);
    res.send(tokens);
  }
}

module.exports = new UserController();
