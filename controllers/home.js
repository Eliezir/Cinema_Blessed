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
                usuario["comentarios"] = [{filme:'Click',nota:5,review:"UMA OBRA PRIMA DA SETIMA ARTE, ADAM SANDLER Um homem, uma máquina, uma besta enjaulada com ódio. Ele não para! Ele ganha e ele ganha.",poster:'ClickPoster300.png'},{filme:'Atypical',nota:5,review:"um dos melhores seriados de toda a humanidade humana.",poster:'atypicalPoster300.jpg'}];
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
