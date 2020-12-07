'use strict'

const Schema = use('Schema')

class TreinoSchema extends Schema {
  up () {
    this.create('Treino', (table) => {
      table.increments()
      table.string('Finalidade', 45).notNullable()
      table.string('Exercicio', 45).notNullable()
      table.string('Repeticoes', 2).notNullable()
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
    this.drop('treinos')
  }
}

module.exports = TreinoSchema