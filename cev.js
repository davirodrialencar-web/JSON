
const prompt = require('prompt-sync')()
const fs = require('fs')

let dados = fs.readFileSync('cev.json', 'utf-8')
let usuarios = JSON.parse(dados)
const nome = prompt("Digite o nome: ")
const idade = parseInt(prompt("Digite sua idade :"))

const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    idade
}

usuarios.push(novoUsuario)
fs.writeFileSync('cev.json', JSON.stringify(usuarios,null,2))
console.log("Usuário cadastrado com sucesso!")



console.log("usuarios cadastrados")
console.log(usuarios)

fs.writeFileSync('cev.json',JSON.stringify(usuarios,null,2))
