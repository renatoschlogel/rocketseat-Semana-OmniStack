const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index (req, res){
        
        const  {user} = req.headers;
        const usuarioLogado = await Dev.findById(user);
        const users = await Dev.find({
            $and: [   // utilizar o end para utilizar a condição and entre as condições da consulta
                {_id: {$ne: user}},
                {_id: {$nin: usuarioLogado.likes}},
                {_id: {$nin: usuarioLogado.dislikes}}
            ]
        });
        return res.json(users);
    },
    async store(req, res){
        const {username} = req.body;

        const userExists = await Dev.findOne({user: username});
        if (userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        var {name, bio, avatar_url } = response.data;
        
        const dev = await Dev.create({
            nome: name,
            user: username,
            bio: bio,
            avatar: avatar_url
        });
    
        return res.json(dev);
    }
}