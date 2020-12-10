'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

//Route.group(() => {
  
  //Route.resource("Treino", "TreinoController").apiOnly();
Route.post("/store", "TreinoController.store");
Route.get("/show", "TreinoController.show");
Route.get("/index", "TreinoController.index");
Route.put("/update", "TreinoController.update");
Route.delete("/destroy", "TreinoController.destroy");
//}).middleware(["auth"]);