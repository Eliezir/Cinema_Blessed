module.exports = function(app){
    var Usuario = app.models.usuario; //# <<
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
        watchlist: async function(req,res){
            usuario=req.session.usuario;
            let movie = req.body.watchListMovie;
            if(usuario.watchlist.includes(movie)){
                let movieIndex = usuario.watchlist.indexOf(movie)
                usuario.watchlist.splice(movieIndex, 1);
            }
            else if(!(usuario.watchlist.includes(movie))){usuario.watchlist.push(movie);}
            let back = req.get('referer')
            await Usuario.updateOne({ _id: usuario._id }, usuario);
            res.redirect(`${back}#filme3`);
        }
    };
    return filmeController;
}