'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResidentialSchema extends Schema {
  up () {
    this.create('residentials', (table) => {
      table.increments()
      table.integer('user_id_fk').unsigned().references('id').inTable('users')
      table.string('department', 100)
      table.string('city', 100)
      table.string('neighborhood', 100)
      table.string('address', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('residentials')
  }
}

module.exports = ResidentialSchema
