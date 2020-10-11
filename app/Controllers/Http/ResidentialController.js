'use strict'

const Residential = use('App/Models/Residential');

/**
 * Controlador de recidencias
 */
class ResidentialController {

  /**
   * Metodo encargado de registrar nuevos datos de residencia en la base de datos
   * @param {formRegisterResidential} request Formulario de registro de usuario
 */
  async saveResidential({ request, response }) {
    try {
      const formRegisterResidential = request.body;
      const newResidential = {
        user_id_fk: formRegisterResidential.userId,
        department: formRegisterResidential.userDepartment,
        city: formRegisterResidential.userCity,
        neighborhood: formRegisterResidential.userNeighborhood,
        address: formRegisterResidential.userAddress
      }

      const createrResidential = await Residential.create(newResidential);
      console.log(createrResidential);
      return response.ok(createrResidential);

    } catch (error) {
      console.log(error);
      return response.internalServerError();
    }
  }

  /**
  * Metodo encargado de consultar todas las residencias de la base de datos
  */

  async allResidences({ response }) {
    try {
      const residences = await Residential.query()
        .innerJoin('users', 'residentials.user_id_fk', 'users.id')
        .fetch();
      return response.ok(residences);
    } catch (error) {
      return response.internalServerError();
    }
  }
}

module.exports = ResidentialController
