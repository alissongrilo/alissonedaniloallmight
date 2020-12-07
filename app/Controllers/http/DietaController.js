"use strict";

const Dieta = use("App/Models/Dieta");

class CursoController {
  async index({ request, response, view }) {
    const Dieta = await Dieta.all();
    return Dieta;
  }

  async show({ params, request, response, view }) {}
}


module.exports = DietaController;