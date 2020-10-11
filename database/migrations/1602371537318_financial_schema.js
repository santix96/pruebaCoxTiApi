'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinancialSchema extends Schema {
  up () {
    this.create('financials', (table) => {
      table.increments()
      table.integer('user_id_fk').unsigned().references('id').inTable('users')
      table.integer('salary')
      table.integer('monthly_expenses')
      table.integer('other_income')
      table.integer('financial_expenses')
      table.timestamps()
    })
  }

  down () {
    this.drop('financials')
  }
}

module.exports = FinancialSchema
