module.exports = function(app){
    var filmes = app.controllers.filmes;
    app.get("/adam",filmes.adam); //app.controllers.home.index
    app.get("/nacional",filmes.nacional);
    app.get("/cliches",filmes.cliches);
    app.get("/lancamentos",filmes.lancamento);
}