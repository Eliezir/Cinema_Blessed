const { get } = require("../app");

module.exports = function(app){
    var home = app.controllers.home;
    app.get("/",home.index); 
    app.get("/login",home.loginPage);
    app.post('/entrar',home.login)
    app.get('/sair', home.logout)
    app.get('/sobre',home.sobre)
}