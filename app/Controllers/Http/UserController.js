'use strict'

const User = use('App/Models/User');

/**
 * Controlador de usuario
 */
class UserController {

  /**
   * Metodo encargado de registrar un nuevo usuario en la base de datos
   * @param {formRegisterUser} request Formulario de registro de usuario
   */
  async saveUser({ request, response }) {

    try {
      const formRegisterUser = request.body;
      const newUser = {
        user_name: formRegisterUser.userName,
        cellphone_number: formRegisterUser.userCellPhoneNumber,
        password: formRegisterUser.userPassword,
        identification_number: formRegisterUser.userIdentificationNumber,
        email: formRegisterUser.userEmail
      }
      const createrUser = await User.create(newUser);
      return response.ok(createrUser);

    } catch (error) {
      return response.internalServerError();
    }
  }

  /**
   * Metodo encargado de consultar todos los usuarios en la base de datos
   */
  async allUsers({ response }) {
    try {
      const users = await User.all();
      return response.ok(users);
    } catch (error) {
      console.log(error)
      return response.internalServerError();
    }
  }

  /**
   * Metodo encargado de verificar el inicio de sesion de un usuario en el sistema
   */
  async verifyLogin({ request, response }) {
    try {
      const formLogin = request.body;
      const user = await User.findBy('email', formLogin.userEmail);
      console.log('llega: ', formLogin.userPassword, 'Esta: ', user.password);
      if (user && user.password == formLogin.userPassword) {
        return response.ok(user);
      }
      else {
        return null;
      }

    } catch (error) {
      console.log(error);
      return response.internalServerError();
    }
  }
}

module.exports = UserController
