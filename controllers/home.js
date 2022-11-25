module.exports = function(app){
    var homeController = {
        index: function(req,res){
            let usuario = req.session.usuario;
            let params = {usuario: usuario}
            res.render("home/index",params)
        },
        sobre: function(req,res){
            usuario = req.session.usuario;
            res.render("home/sobre",usuario)
        }
        ,
        login: function(req,res){
            let user = req.body.usuario.user;
            let password = req.body.usuario.password;
          
            if(user && password){
                let usuario = req.body.usuario;
                usuario["comentarios"] = [];
                usuario["watchlist"] = [];
                usuario["nome"] = usuario["user"]
                usuario["icon"] = "default";
                usuario["previousIcon"] = "default";
                req.session.usuario = usuario;
                res.redirect("/perfil")

            }
            else{
                res.redirect("/login")
            }
        },
        loginPage: function(req,res){
            res.render('home/login')
        },
        logout: function(req,res){
            req.session.destroy();
            res.redirect("/")
        }
    }
    return homeController;
}
