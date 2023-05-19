module.exports = function(app){
    var Usuario = app.models.usuario; //# <<
    var userPerfilController = {
        index: async function(req,res){
            let usuario = req.session.usuario;
            let userName = req.params.user;
            const userProfile = await Usuario.findOne({ user: userName  });
            let comentarios = userProfile.comentarios
            let watchlist = userProfile.watchlist
            let params = {usuario: usuario, user:userProfile, comentarios: comentarios, watchlist: watchlist}
       
            res.render("usersPerfil/userIndex.ejs",params)
        },

        follow: async function(req,res){
            usuario = req.session.usuario
            let userName = req.params.user;
            usuario.following.push(userName)
            res.redirect(req.get('referer'))
            await Usuario.updateOne({ _id: usuario._id }, usuario);
        },
        unfollow: async function(req,res){
            usuario = req.session.usuario
            let userName = req.params.user;
            let index = usuario.following.indexOf(userName);
            usuario.following.splice(index, 1);
            res.redirect(req.get('referer'))
            await Usuario.updateOne({ _id: usuario._id }, usuario);
        }
    }
    return userPerfilController;
}