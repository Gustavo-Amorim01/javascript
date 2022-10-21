function verificar() {
let txtnasc = document.querySelector('nasc')
let nasc = Number (txtnasc.value)
let idade = 2022 - nasc
let fsex = document.getElementsByName('radsex')
let genero = ''
let img = document.creatElement ('img')
img.setAttribute('id','foto')
if (fsex [0].checked) {
    genero = 'Homem'
    if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('sre', 'crianca.menino.p.png')
    } else if (idade < 21) {
        //Jovem
        img.setAttribute('img', 'jovem.mas.p.png')
    } else if (idade < 50) {
        //Adulto
        img.setAttribute('img', 'homem.adulto.p.png')
    } else if (idade < 120) {
        img.setAttribute('img', 'idoso.p.png')
    } else {
        img.innerHTML = `[ERRO] Tente uma idade válida`
    }
} else if(fsex[1].checked){
    genero = 'mulher'
    if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('sre', 'crianca.menina.p.png')
    } else if (idade < 21) {
        //Jovem
        img.setAttribute('img', 'jovem.fem.p.png')
    } else if (idade < 50) {
        //Adulto
        img.setAttribute('img', 'mulher.adulto.p.png')
    } else if (idade < 120) {
        img.setAttribute('img', 'idosa.p.png')
    } else {
        img.innerHTML = `[ERRO] Tente uma idade válida`
    }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero}`
}