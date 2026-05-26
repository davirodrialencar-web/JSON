const fs = require('fs')

const dados =  fs.readFileSync('exec1.json','utf-8')
const usuarios = JSON.parse(dados)

console.log("usuarios cadastrados")
console.log(usuarios)