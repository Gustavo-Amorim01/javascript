function carregar() {
    let msg = document.querySelector('#msg')
    let imagem = document.querySelector('imagem')
    let data = Date()
    let hora = data.getHours
    msg.innerHTML = `Agora são ${hora} horas.`
}

