module.exports = function(app){
    var filmeController = {
        adam: function(req,res){
            //acesso a pagina adam sandler
            usuario = req.session.usuario;
            res.render("filmes/adam",usuario)
        },
        lancamento: function(req,res){
            //acesso a pagina lançamentos
            usuario = req.session.usuario;
            res.render("filmes/lancamento",usuario)
        },
        cliches: function(req,res){
            //acesso a pagina filmes clichês
            usuario = req.session.usuario;
            res.render("filmes/cliches",usuario)
        },
        nacional: function(req,res){
            //acesso a pagina filmes nacionais
            usuario = req.session.usuario;
            res.render("filmes/nacional",usuario)
        }, 
        watchlist: function(req,res){
            usuario=req.session.usuario;
            movie = req.body.watchListMovie;
            usuario.watchlist.push(movie); 
            console.log(usuario.watchlist)
            res.redirect("/")
        }
        
    };
    return filmeController;
}