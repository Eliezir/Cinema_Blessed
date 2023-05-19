const usuario = require("../models/usuario");

module.exports = function (app) {
  var Usuario = app.models.usuario; //# <<
    var homeController = {
        index: function (req, res) {
            let usuario = req.session.usuario;
            let params = { usuario: usuario }
            res.render("home/index", params)
        },
        sobre: function (req, res) {
            usuario = req.session.usuario;
            res.render("home/sobre", usuario)
        }
        ,
        // Depois da versão 6.0, o Mongoose não aceita mais callback Model.findOne() no longer accepts a callback
        login: async function (req, res) {
          const { user, senha } = req.body.usuario;
          try {
            // Verifica se o usuário existe no banco de dados
            const usuario = await Usuario.findOne({ user });
            if (usuario) {
              if (usuario.senha === senha) {
                req.session.usuario = usuario;
                res.redirect('/perfil');
              } else {
                console.log('Senha incorreta');
                res.redirect('/login');
              }
            } else {
              const novoUsuario = new Usuario({ user: user, senha: senha });
              console.log("Caiu no user n existe")
              if (!novoUsuario.user || !novoUsuario.senha) {
                console.log('Caiu no usuario ou senha undefined');
                res.redirect('/login');
                return;
              }
              await novoUsuario.save();
              req.session.usuario = novoUsuario;
              res.redirect('/perfil');
            }
          } catch (error) {
            console.error(error);
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
