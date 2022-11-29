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
                    nome: "teste",
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
                        { filme: 'Auto Da Compadecida', nota: 5, review: "Jinx injustiçada", poster: 'Auto_da_compadecidaPoster.jpg',}
                    ]
                },
                {
                    user: "Veterano16",
                    nome: "Veterano16",
                    instagram: "TheRock",
                    bio: "Julio Cesar, o maior fã de barraca do beijo de maceió ",
                    icon: "icon19.jpg",
                    watchlist: [],
                    comentarios: [
                        {
                          filme: 'A Cinco Passos de Você',
                          nota: '5',
                          poster: 'ACincoPassos.jpg',
                          review: 'Lindo boy'
                        },
                        {
                          filme: 'A Culpa é das Estrelas',
                          nota: '5',
                          poster: 'ACulpaÉDasEstrelasPoster300.jpg',
                          review: 'lindo tbm\r\n'
                        },
                        {
                          filme: 'Adão Negro',
                          nota: '5',
                          poster: 'Adão_poster.jpg',
                          review: 'THE ROCK'
                        },
                        {
                          filme: 'Arcane',
                          nota: '1',
                          poster: 'ArcanePoster300.jpg',
                          review: 'LOL'
                        },
                        {
                          filme: 'Click',
                          nota: '4',
                          poster: 'ClickPoster300.png',
                          review: 'top'
                        }
                      ],
                      watchlist: [
                        'Auto_da_compadecidaPoster.jpg',
                        'UmFazDeContaPoster300.jpg',
                        'ComoSeFosse300.png'
                      ],
                },
                {
                    user: 'VinniBoy',
                    seguindo: [ 'AdamSandler' ],
                    seguidores: [],
                    nome: 'VinniBoy',
                    icon: 'icon02.jpg',
                    previousIcon: 'icon02.jpg',
                    bio: 'Amante da obra de Adam Sandler',
                    instagram: 'luiz.vinnicius',
                    comentarios: [
                      {
                        filme: 'Como se fosse a primeira vez',
                        nota: '5',
                        poster: 'ComoSeFosse300.png',
                        review: 'Adam Sandler'
                      },
                      {
                        filme: 'Click',
                        nota: '5',
                        poster: 'ClickPoster300.png',
                        review: 'Adam Sandler'
                      },
                      {
                        filme: 'Um Faz De Conta Que Acontece',
                        nota: '5',
                        poster: 'UmFazDeContaPoster300.jpg',
                        review: 'AdamSandler'
                      },
                      {
                        filme: 'Stranger Things',
                        nota: '4',
                        poster: 'StrangerThings.jpg',
                        review: 'Doidera'
                      },
                      {
                        filme: 'Dr Who',
                        nota: '1',
                        poster: 'DrWhoPoster300.jpg',
                        review: 'Muito Ruim'
                      },
                      {
                        filme: 'Atypical',
                        nota: '3',
                        poster: 'AtypicalPoster300.jpg',
                        review: 'Bom'
                      },
                      {
                        filme: 'Adão Negro',
                        nota: '1',
                        poster: 'Adão_poster.jpg',
                        review: 'porrada'
                      }
                    ],
                    watchlist: [ 'ParaTodosOsGarotos300.png', 'ACulpaÉDasEstrelasPoster300.jpg' ],
                  },
                  {
                    user: 'GeoMax',
                    password: 'geomax',
                    comentarios: [
                      {
                        filme: 'Dr Who',
                        nota: '5',
                        poster: 'DrWhoPoster300.jpg',
                        review: 'MUITO BOM'
                      },
                      {
                        filme: 'Brooklyn nine-nine',
                        nota: '5',
                        poster: 'Brooklyn99Poster300.jpg',
                        review: 'UMA OBRA DE ARTE'
                      },
                      {
                        filme: 'Stranger Things',
                        nota: '4',
                        poster: 'StrangerThings.jpg',
                        review: 'Muito bom'
                      },
                      {
                        filme: 'Para Todos Os Garotos',
                        nota: '1',
                        poster: 'ParaTodosOsGarotos300.png',
                        review: 'eca'
                      },
                      {
                        filme: 'Arcane',
                        nota: '5',
                        poster: 'ArcanePoster300.jpg',
                        review: 'LOL'
                      }
                    ],
                    watchlist: [
                      'ClickPoster300.png',
                      'UmFazDeContaPoster300.jpg',
                      'Adão_poster.jpg'
                    ],
                    seguindo: [],
                    seguidores: [],
                    nome: 'GeoMax',
                    icon: 'icon07.jpg',
                    previousIcon: 'icon07.jpg',
                    bio: 'Gosto de filmes de qualidade duvidosa',
                    twitter: 'geovanny_maxV',
                    instagram: 'geovanny_max',
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
                usuario["seguindo"] = [];
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
