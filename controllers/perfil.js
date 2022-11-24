module.exports = function(app){
    let PerfilController = {
        index: function(req, res){
            let usuario = req.session.usuario;
            let comentarios = usuario.comentarios
            let params = {usuario: usuario, comentarios: comentarios}
            res.render("perfil/index", params)
           
        },
        create: function(req, res){
            var comentario = req.body.comentario,
            usuario = req.session.usuario;
            usuario.comentarios.push(comentario);
            res.redirect("/perfil")
        },
        edit: function (req, res) {
            var id = req.params.id,
            comentario = req.body.comentario;
            usuario = req.session.usuario;
            usuario.comentarios[id] = comentario;
            res.redirect("/perfil");
        },
        destroy: function (req, res) {
            var usuario = req.session.usuario,
            id = req.params.id;
            usuario.comentarios.splice(id, 1);
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
         template: function(req,res){
            usuario = req.session.usuario;
            usuario["comentarios"] = [
                {filme:'Brooklyn nine-nine',nota:5,review:"noice",poster:'Brooklyn99Poster300.jpg'},
                {filme:'Click',nota:5,review:"UMA OBRA PRIMA DA SETIMA ARTE, ADAM SANDLER Um homem, uma máquina, uma besta enjaulada com ódio. Ele não para! Ele ganha e ele ganha.",poster:'ClickPoster300.png'},
                {filme:'Atypical',nota:5,review:"um dos melhores seriados de toda a humanidade humana.",poster:'atypicalPoster300.jpg'},
                {filme:'Maldição da residencia Hill',nota:4,review:"é de medo mas é bom",poster:'MaldicaoHillPoster300.jpg'},
                {filme:'The Office',nota:5,review:"That's what she said",poster:'TheofficePoster300.jpg'},
                {filme:'One Day At Time',nota:5,review:"Combinação perfeita, a série consegue falar sobre assuntos serios e importantes sem perder o clima leve e contagiante, uma obra de arte.",poster:'oneDayAtTimePoster300.jpg'},
               {filme:'Auto da compadecida',nota:5,review:"Uma obra de arte do cinema nacional",poster:'auto_da_compadecidaPoster.jpg'},
               {filme:'Arcane',nota:5,review:"Jinx injustiçada",poster:'arcanePoster300.jpg'},
            ];
            usuario["twitter"] = "oEmpn_"
            usuario["instagram"] = "Eliezir?"
            usuario["bio"] = "Oi, eu sou o Eliezir, fã nº1 do Adam Sandler e da Lara Jean 📽"

            res.redirect("/perfil")
            },
            editPerfil: function(req,res){
                usuario = req.session.usuario
            res.render("perfil/userEdit")
        },
        updatePerfil: function(req,res){
           var nome = req.body.username;
           var icon = req.body.profileIcon;
           var bio = req.body.bio;
           var twitter = req.body.twitter;
           var instagram = req.body.instagram;
            usuario = req.session.usuario;
            usuario.nome = nome;
            usuario.icon = icon;
            usuario.bio = bio;
            usuario.twitter = twitter;
            usuario.instagram = instagram;
            res.redirect("/perfil")
        }
    }
    return PerfilController;
}