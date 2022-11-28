module.exports = function(app){
    let perfil = app.controllers.perfil;
    let autenticar = require("../middlewares/autenticador");
    app.get('/perfil',autenticar, perfil.index )
    app.get("/perfil/template",autenticar, perfil.template)
    app.get("/perfil/edit", autenticar, perfil.editPerfil)
    app.get("/perfil/edit/icon", autenticar, perfil.editPerfilIcon)
    app.get("/perfil/amigos", autenticar, perfil.amigos)
    app.post("/perfil/comentario",autenticar, perfil.create)
    app.post("/perfil/comentario/:id/editar",autenticar, perfil.edit)
    app.post("/perfil/editar",autenticar, perfil.updatePerfil)
    app.post("/perfil/editImg",autenticar, perfil.updateIcon)
    app.delete("/perfil/comentario/:id/",autenticar, perfil.destroy);
  /*   app.get("/comentario/:id", perfil.show); */
};