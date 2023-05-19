
module.exports = function(app){
    var Usuario = app.models.usuario; //# <<
    let PerfilController = {
        index:  async function (req, res){
            let _id = req.session.usuario._id;
            const usuario = await Usuario.findById(_id);
            let comentarios = usuario.comentarios
            let watchlist = usuario.watchlist
            let params = {usuario: usuario, comentarios: comentarios, watchlist: watchlist}
            res.render("perfil/index", params)
         
        },
        create: async function(req, res){
            var comentario = req.body.comentario,
            usuario = req.session.usuario;
            usuario.comentarios.push(comentario);
            if(usuario.watchlist.includes(comentario.poster)){
                usuario.watchlist.splice(usuario.watchlist.indexOf(comentario.poster), 1);
            }
            await Usuario.updateOne({ _id: usuario._id }, usuario);
            res.redirect("/perfil")
        },
        edit: async function (req, res) {
            var id = req.params.id,
            comentario = req.body.comentario;
            usuario = req.session.usuario;
            usuario.comentarios[id] = comentario;
            await Usuario.updateOne({ _id: usuario._id }, usuario);
            res.redirect("/perfil");
        },
        destroy: async function (req, res) {
            var usuario = req.session.usuario,
            id = req.params.id;
            usuario.comentarios.splice(id, 1);
            await Usuario.updateOne({ _id: usuario._id }, usuario);
            res.redirect("/perfil");
            },  
        comentarios: function(req, res) {
            var id = req.params.id
            comentario = req.session.usuario.comentarios[id],
            parametro = {contato: contato, id:id};
            res.render("comentarios/show", params);
        },
        update: function (req, res) {
            var comentario = req.body.comentario,
            usuario = req.session.usuario;
            usuario.comentarios[req.params.id] = comentario;
            res.redirect("/comentarios");
        },
            editPerfil: function(req,res){
                usuario = req.session.usuario
            res.render("perfil/perfilEdit/userEdit")
        },
        editPerfilIcon: function(req,res){
            usuario = req.session.usuario
        res.render("perfil/perfilEdit/editImg")
    },
        updatePerfil: async function(req,res){
            const { username, bio, twitter, instagram, previousIcon } = req.body;
            let usuario = req.session.usuario;
            try {
                // Atualiza os campos no objeto do usuário
                usuario.nome = username;
                usuario.bio = bio;
                usuario.twitter = twitter;
                usuario.instagram = instagram;
                usuario.previousIcon = previousIcon;
                await Usuario.updateOne({ _id: usuario._id }, usuario);
                res.redirect('/perfil');
                }
                catch (error) {
                    console.error(error);
                }
                },
        updateIcon: function(req, res) {
            back=req.header('Referer') || '/';
            var icon = req.body.profileIcon;
            var previousIcon = req.body.previousIcon;
            usuario = req.session.usuario;
            usuario.icon = icon;
            usuario.previousIcon = previousIcon;
            while(true){
                if(back[back.length-1]!= "/"){
                    back= back.slice(0,-1)
                }
                else {
                    back= back.slice(0,-1)
                    res.redirect(back);
                    break;}
            }   
        },
        amigos: async function(req, res){
           usuario =  req.session.usuario;
            let following = usuario.following;
            let friends = [];
            for (const user of following) {
                const userData = await Usuario.findOne({ user: user });
                friends.push(userData);
              }
              const params = { usuario: usuario, friends: friends };
              res.render("perfil/amigos", params);
            
        }
    }
    return PerfilController;
}