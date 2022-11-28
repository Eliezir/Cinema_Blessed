const { get } = require("../app");

module.exports = function(app){
    var userPerfil = app.controllers.userPerfil;
    let autenticar = require("../middlewares/autenticador");
    app.get("/perfil/:user",userPerfil.index); 
    app.post("/perfil/:user/follow",autenticar,userPerfil.follow);
    app.post("/perfil/:user/unfollow",autenticar,userPerfil.unfollow);
}