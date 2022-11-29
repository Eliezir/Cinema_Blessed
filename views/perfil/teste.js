let amigos = [];
usuario.seguindo.forEach(function(userName){
  let amigo = users[users.findIndex(user => user.user === userName)]
    amigos.push({
      nome:amigo.nome,
      match:0,
      comentarios:amigo.comentarios;
    })
})
