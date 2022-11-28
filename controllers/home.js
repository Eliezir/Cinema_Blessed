module.exports = function (app) {
    var homeController = {
        index: function (req, res) {
            let usuario = req.session.usuario;
            let params = { usuario: usuario }
            let users = [
                {
                    user: "AdamSandler",
                    nome: "AdamSandler",
                    instagram: "adamsandler",
                    twitter: "adamsandler",
                    bio: "The GOAT",
                    icon: "icon11.jpg",
                    watchlist: [],
                    comentarios: [

                        { filme: 'Click', nota: 5, review: "ADAM SANDLER Um homem", poster: 'ClickPoster300.png' },
                        { filme: 'Como se fosse a primeira vez ', nota: 5, review: "ADAM SANDLER", poster: 'comoSeFosse300.png' },
                        { filme: 'Um faz de conta que acontece ', nota: 5, review: "ADAM SANDLER", poster: 'UmFazDeContaPoster300.jpg' },
                    ]
                },
                {
                    user: "Teste",
                    nome: "Teste",
                    instagram: "EmPn",
                    twitter: "EmPn",
                    bio: "EmPn",
                    icon: "icon12.jpg",
                    watchlist: [],
                    comentarios: [
                        { filme: 'Brooklyn nine-nine', nota: 5, review: "noice", poster: 'Brooklyn99Poster300.jpg' },
                        { filme: 'Para Todos Os Garotos', nota: 5, review: "Uma obra de arte do cinema, lara jean linda perfeita", poster: 'ParaTodosOsGarotos300.png' },
                        { filme: 'Click', nota: 5, review: "UMA OBRA PRIMA DA SETIMA ARTE, ADAM SANDLER Um homem, uma máquina, uma besta enjaulada com ódio. Ele não para! Ele ganha e ele ganha.", poster: 'ClickPoster300.png' },
                        { filme: 'Atypical', nota: 5, review: "um dos melhores seriados de toda a humanidade humana.", poster: 'atypicalPoster300.jpg' },
                        { filme: 'Maldição da residencia Hill', nota: 4, review: "é de medo mas é bom", poster: 'MaldicaoHillPoster300.jpg' },
                        { filme: 'The Office', nota: 5, review: "That's what she said", poster: 'TheofficePoster300.jpg' },
                        { filme: 'One Day At Time', nota: 5, review: "Combinação perfeita, a série consegue falar sobre assuntos serios e importantes sem perder o clima leve e contagiante, uma obra de arte.", poster: 'oneDayAtTimePoster300.jpg' },
                        { filme: 'Arcane', nota: 5, review: "Jinx injustiçada", poster: 'arcanePoster300.jpg' },
                    ]
                }

            ]
            req.session.users = users;
            res.render("home/index", params)
        },
        sobre: function (req, res) {
            usuario = req.session.usuario;
            res.render("home/sobre", usuario)
        }
        ,
        login: function (req, res) {
            let user = req.body.usuario.user;
            let password = req.body.usuario.password;

            if (user && password) {
                let usuario = req.body.usuario;
                usuario["comentarios"] = [];
                usuario["watchlist"] = [];
                usuario["seguindo"] = ["AdamSandler"];
                usuario["seguidores"] = []
                usuario["nome"] = usuario["user"]
                usuario["icon"] = "default";
                usuario["previousIcon"] = "default";
                req.session.usuario = usuario;
                res.redirect("/perfil")

            }
            else {
                res.redirect("/login")
            }
        },
        loginPage: function (req, res) {
            res.render('home/login')
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect("/")
        }
    }
    return homeController;
}
