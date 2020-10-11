'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('user_name', 80).notNullable().unique()
      table.integer('identification_number')
      table.string('cellphone_number',10)
      table.string('email', 254).notNullable().unique()
      table.string('password', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
