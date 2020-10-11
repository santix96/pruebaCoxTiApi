'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    /* User routes */
    Route.post('save_user', 'UserController.saveUser')
    Route.post('login', 'UserController.verifyLogin')
    Route.get('all_users', 'UserController.allUsers')

    /* Residences routes */
    Route.post('save_residential', 'ResidentialController.saveResidential')
    Route.get('all_residences', 'ResidentialController.allResidences')

    /* Financial routes */
    Route.post('save_financial', 'FinancialController.saveFinancial')
    Route.get('all_financials', 'FinancialController.allFinancials')

}).prefix('api');



 