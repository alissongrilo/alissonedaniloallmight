'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
  Route.get("/dieta", "DietaController.get");
  
  Route.resource("Treino", "TreinoController").apiOnly();
  /*Route.post("/Treino", "TreinoController.store");
  Route.get("/Treino/:id", "TreinoController.show");
  Route.get("/Treino", "TreinoController.index");
  Route.put("/Treino/:id", "TreinoController.update");
  Route.delete("/Treino/:id", "TreinoController.destroy");*/
}).middleware(["auth"]);