const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){

        const { user } = req.headers;
        const { id } = req.params;
   
        const usuarioLogado = await Dev.findById(user);

        const usuarioAlvo = await Dev.findById(id);
  ;
        if(!usuarioAlvo) {
            return res.status(400).json({error: 'Dev não existe!'});
        }

        usuarioLogado.dislikes.push(usuarioAlvo._id);
        
        await usuarioLogado.save();

        return res.json(usuarioLogado);
    }
}