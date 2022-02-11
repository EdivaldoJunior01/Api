const express = require('express');
const routes = express.Router();

const LojasController = require("./controllers/LojasController.js")
const Lojamiddleware = require("./middlewares/Lojamiddleware.js")

routes.get("/", (requeste, response)=> response.send("Hello World"));
routes.get("/lojas", LojasController.index);

routes.post("/lojas", LojasController.store); 

routes.put("/lojas/:id", Lojamiddleware.validateId,LojasController.update)

routes.delete("/lojas/:id", Lojamiddleware.validateId,LojasController.delete)



module.exports = routes;