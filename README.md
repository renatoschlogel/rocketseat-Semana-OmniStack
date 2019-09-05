# rocketseat-omnistack08
Semana OmniStack 8.0 da Rocketseat

backend - Nodejs;
frontend - React;
mobile - React Native;


Observação: Esta sendo utilizado o gerenciado de depennciar yarn,
            porem tambem pode ser utilizado o npm;

# Backend - NodeJS
  1. Iniciar arquivo packge.jsom                           : yarn init -y
  2. Instalando o express                                  : yarn add express
    * micro service para NodeJS para trabalhar com rotas;
  3. Instalando o nodemon                                  : yarn add nodemon -D
    * o nodemon da reaload na aplicacao, cada vez o fonte é salvo. Assim é apenas uma dependencia de Desenvolvimento.
  4. Criar um script no package.json para executar o nodemon com o yarn;   : yarn dev
      "scripts": {
        "dev": "nodemon src/server.js"
      }
  5. Instalando mongoose                                   : yarn add mongoose
    * Ferramente para trabalhar com o banco de dados apenas utilizado java Script;
  6. Utilizar o axios para acessar APIs externas           : yarn add axios
  7. utiliar await para aguardar o retorno de uma api. 
    * para utilizao await, a funcao deve estar anotada com async;
  8. Utilizar o MongoDb Compass para consultar o banco de dados;
  9. instalando o cors                                     : yarn add cors
    * Para deixar a API acessivel ( no caso o React e React native)
  10. programa para testar a API - insomnia ou Postman


# Frontand - ReactJS
  1. Criando projeto do frontend                           : yarn create react-app frontend;
  2. instalação do react-router-dom                        : yarn add react-router-dom
    * Trabalhar com rotas no front;
  3. Instalar o axios (mesmo do backend):                  : yarn add axios
