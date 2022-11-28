module.exports = function(app){
    let PerfilController = {
        index: function(req, res){
            let usuario = req.session.usuario;
            let comentarios = usuario.comentarios
            let watchlist = usuario.watchlist
            let params = {usuario: usuario, comentarios: comentarios, watchlist: watchlist}
            res.render("perfil/index", params)
           
        },
        create: function(req, res){
            var comentario = req.body.comentario,
            usuario = req.session.usuario;
            usuario.comentarios.push(comentario);
            if(usuario.watchlist.includes(comentario.poster)){
                usuario.watchlist.splice(usuario.watchlist.indexOf(comentario.poster), 1);
            }
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
                {filme:'Para Todos Os Garotos',nota:5,review:"Uma obra de arte do cinema, lara jean linda perfeita",poster:'ParaTodosOsGarotos300.png'},
                {filme:'Click',nota:5,review:"UMA OBRA PRIMA DA SETIMA ARTE, ADAM SANDLER Um homem, uma máquina, uma besta enjaulada com ódio. Ele não para! Ele ganha e ele ganha.",poster:'ClickPoster300.png'},
                {filme:'Atypical',nota:5,review:"um dos melhores seriados de toda a humanidade humana.",poster:'atypicalPoster300.jpg'},
                {filme:'Maldição da residencia Hill',nota:4,review:"é de medo mas é bom",poster:'MaldicaoHillPoster300.jpg'},
                {filme:'The Office',nota:5,review:"That's what she said",poster:'TheofficePoster300.jpg'},
                {filme:'One Day At Time',nota:5,review:"Combinação perfeita, a série consegue falar sobre assuntos serios e importantes sem perder o clima leve e contagiante, uma obra de arte.",poster:'oneDayAtTimePoster300.jpg'},
               {filme:'Arcane',nota:5,review:"Jinx injustiçada",poster:'arcanePoster300.jpg'},
            ];
            usuario["twitter"] = "oEmpn_"
            usuario["instagram"] = "Eliezir?"
            usuario["bio"] = "Oi, eu sou o Eliezir, fã nº1 do Adam Sandler e da Lara Jean 📽"
            usuario["icon"] = "icon18.jpg"
            usuario["watchlist"] = ["ACulpaÉDasEstrelasPoster300.jpg","ACincoPassos.jpg","Adão_poster.jpg","Auto_da_compadecidaPoster.jpg","ComoSeFosse300.png"]
            res.redirect("/perfil")
            },
            editPerfil: function(req,res){
                usuario = req.session.usuario
            res.render("perfil/perfilEdit/userEdit")
        },
        editPerfilIcon: function(req,res){
            usuario = req.session.usuario
        res.render("perfil/perfilEdit/editImg")
    },
        updatePerfil: function(req,res){
           var nome = req.body.username;
           var bio = req.body.bio;
           var twitter = req.body.twitter;
           var instagram = req.body.instagram;
           var previousIcon = req.body.previousIcon;
           usuario = req.session.usuario;
            usuario.nome = nome;
            usuario.bio = bio;
            usuario.twitter = twitter;
            usuario.instagram = instagram;
            usuario.previousIcon = previousIcon;
            res.redirect("/perfil")
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
        amigos: function(req, res){
           usuario =  req.session.usuario;
           users = req.session.users;
            params = {usuario: usuario, users: users}
            res.render("perfil/amigos", params)
        }
    }
    return PerfilController;
}