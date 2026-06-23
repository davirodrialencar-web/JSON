const prompt = require('prompt-sync')()
const fs = require('fs')//pedindo comandos

let cadastro = 0 
while (cadastro === 0) {
    console.log("Comece o seu cadastro!")
    console.log(parseInt(prompt("Digite 1 para começar o seu cadastro:")))
    if (cadastro === 1 ) {
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
    }
}

