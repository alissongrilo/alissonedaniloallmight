"use strict";

const Treino = use("App/Models/Treino");


class TreinoController {
  async index() {
    const Treino = await Treino.query().with(["Dieta"]).fetch();
    return Treino;
  }

  async store({ request, auth }) {
    const data = request.only(["Finalidade", "Exercicios", "Repeticoes"]);
    console.log(auth.user.id);
    const Treino = await Treino.create(data);
    return Treino;
  }

  async show({ params, request, response, view }) {
    const Treino = await Treino.findOrFail(params.id);
    return Treino;
  }

  async update({ params, request, response }) {
    const Dieta = await Treino.findOrFail(params.id);
    const { Finalidade, id, Exercicio } = request.only([
      "Finalidade",
      "id",
      "Exercicio"]);
    Treino.Finalidade = Finalidade;
    Treino.id = id;
    Treino.Exercicio = Exercicio;
    await Treino.save();
    return Treino;
  }

  async destroy({ params, request, response }) {
    const Treino = await Treino.findOrFail(params.id);
    await Treino.delete();
    return Treino;
  }
}

module.exports = TreinoController;