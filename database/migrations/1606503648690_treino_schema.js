'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TreinoSchema extends Schema {
  up () {
    this.create('treinos', (table) => {
      table.increments()
      table.string('Finalidade', 45).notNullable().unique()
      table.string('Exercicio', 45).notNullable().unique()
      table.string('Repeticoes', 2).notNullable().unique()
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
    this.drop('treinos')
  }
}

module.exports = TreinoSchema