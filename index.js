const fs = require('fs')

const dados =  fs.readFileSync('dados.json','utf-8')
const usuarios = JSON.parse(dados)

console.log("usuarios cadastrados")
console.log(usuarios)

usuarios.push({id:3, nome:"Josefino",idade:15})
fs.writeFileSync('dados.json', JSON.stringify(usuarios,null,2))
