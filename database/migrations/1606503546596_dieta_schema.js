'use strict'

const Schema = use('Schema')

class DietaSchema extends Schema {
  up () {
    this.create('Dieta', (table) => {
      table.increments()
      table.time('Horario', 4).notNullable()
      table.string('Alimento',45).notNullable()
      table
        .integer("id_user")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("cascade")
        .onDelete("cascade")
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dietas')
  }
}

module.exports = DietaSchema