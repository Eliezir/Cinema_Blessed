module.exports = function(app){
    var userPerfilController = {
        index: function(req,res){
            let usuario = req.session.usuario;
            let userName = req.params.user;
            
            let userIndex = users.findIndex(user => user.user === userName)
            let comentarios = users[userIndex].comentarios
            let watchlist = users[userIndex].watchlist
            let params = {usuario: usuario, user:users[userIndex], comentarios: comentarios, watchlist: watchlist}
       
            res.render("usersPerfil/userIndex.ejs",params)
        },

        follow: function(req,res){
            usuario = req.session.usuario
            let userName = req.params.user;
            usuario.seguindo.push(userName)
            res.redirect(req.get('referer'))
        },
        unfollow: function(req,res){
            usuario = req.session.usuario
            let userName = req.params.user;
            let index = usuario.seguindo.indexOf(userName);
            usuario.seguindo.splice(index, 1);
            res.redirect(req.get('referer'))
        }
    }
    return userPerfilController;
}