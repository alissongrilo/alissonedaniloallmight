"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.all();
    console.log(data);
    //const user = await User.create(data);
    //return user;
  }
  
  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;