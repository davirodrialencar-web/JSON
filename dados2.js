const fs = require ('fs') //Guarda o sistema de arquivos do js

const dados = fs.readFileSync('dados.json','utf-8');//utiliza o sistema de arquivos para ler o arquivo dados.json

const usuarios = JSON.parse(dados) //transforma o json em objeto js.

console.log("usuarios cadastrados no .json",usuarios) //mostramos o objeto convertido para o js