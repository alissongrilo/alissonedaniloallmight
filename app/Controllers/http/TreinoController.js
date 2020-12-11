"use strict";

const Treino = use("App/Models/Treino");

class TreinoController {
  async index() {
    const treinos = await Treino.all();
    return treinos;
  }

  async store({ request, auth }) {
    const {finalidade, exercicios, repeticoes} = request.only(["finalidade", "exercicios", "repeticoes"]);
    const treinos = await Treino.create({finalidade, exercicios, repeticoes, user_id:auth.user.id});
    return treinos;
  }

  async show({ params, request, response, view }) {
    const treinos = await Treino.findOrFail(params.id);
    return treinos;
  }

  async update({ params, request, response }) {
    const treinos = await Treino.findOrFail(params.id);
    const { finalidade, user_id, exercicio, repeticoes } = request.only([
      "finalidade",
      "user_id",
      "exercicio",
      "repeticoes"]);
    treinos.finalidade = finalidade;
    treinos.user_id = user_id;
    treinos.exercicio = exercicio;
    treinos.repeticoes = repeticoes;
    await treinos.save();
    return treinos;
  }

  async destroy({ params, request, response }) {
    const treinos = await Treino.findOrFail(params.id);
    await treinos.delete();
    return treinos;
  }
}

module.exports = TreinoController;