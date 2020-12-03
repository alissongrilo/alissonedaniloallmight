'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DietaSchema extends Schema {
  up () {
    this.create('dietas', (table) => {
      table.increments()
      table.string('Finalidade', 45).notNullable().unique()
      table.time('Horario', 4).notNullable().unique()
      table.string('Alimento',45).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('dietas')
  }
}

module.exports = DietaSchema