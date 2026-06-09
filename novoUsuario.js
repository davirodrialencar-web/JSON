const prompt = require('prompt-sync')()
const fs = require('fs')

let dados = fs.readFileSync('dados.json', 'utf-8')
let usuarios = JSON.parse(dados)
const nome = prompt("Digite o nome: ")
const idade = parseInt(prompt("Digite sua idade :"))

const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    idade
}

usuarios.push(novoUsuario)
fs.writeFileSync('dados.json', JSON.stringify(usuarios,null,2))
console.log("Usuário cadastrado com sucesso!")