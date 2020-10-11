'use strict'

const Financial = use('App/Models/Financial');

/**
 * Controlador de datos financieros
 */
class FinancialController {

    /**
     * Metodo encargado de registrar nuevos datos financieros en la base de datos
     * @param {formRegisterFinancial} request Formulario de registro financiero
    */
    async saveFinancial({ request, response }) {
        try {
            const formRegisterFinancial = request.body;
            const newFinancial = {
                user_id_fk: formRegisterFinancial.userId,
                salary: formRegisterFinancial.userSalary,
                monthly_expenses: formRegisterFinancial.userMonthlyExpenses,
                other_income: formRegisterFinancial.userOtherIncome,
                financial_expenses: formRegisterFinancial.userFinancialExpenses
            }

            const createrFinancial = await Financial.create(newFinancial);
            return response.ok(createrFinancial);

        } catch (error) {
            return response.internalServerError();
        }
    }

    /**
    * Metodo encargado de consultar todas los datos financieros de la base de datos
    */

    async allFinancials({ response }) {
        try {
            const financials = await Financial.query()
                .innerJoin('users', 'financials.user_id_fk', 'users.id')
                .fetch();
            return response.ok(financials);
        } catch (error) {
            return response.internalServerError();
        }
    }
}

module.exports = FinancialController
