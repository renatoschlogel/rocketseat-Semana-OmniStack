import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login( {history}) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('username:', username);

        //const response = await api.get('/devs');
        console.log('Opaaa');
        
        
        
        const response = await api.post('/devs', { 
           username: username
        });



        console.log(response);

        history.push('/main')
    }

    return (
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/>

            <input 
              placeholder="Digite seu usuário do Github"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
      </div>
  );
}
