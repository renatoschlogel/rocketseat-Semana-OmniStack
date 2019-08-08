const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){

        const { user } = req.headers;
        const { id } = req.params;
        console.log('opaaaaaaaaaaaaa', id, user);
        const usuarioLogado = await Dev.findById(user);
        console.log('opaaaaaaaaaaaaa 222222222222222', id, user);
        const usuarioAlvo = await Dev.findById(id);
        console.log('opaaaaaaaaaaaaa 33333333333', id, user);
        if(!usuarioAlvo) {
            return res.status(400).json({error: 'Dev não existe!'});
        }

        if(usuarioAlvo.likes.includes(usuarioLogado._id)){
            console.log('DEU MATCH!')
        }

        usuarioLogado.likes.push(usuarioAlvo._id);
        
        await usuarioLogado.save();

        return res.json(usuarioLogado);
    }
}