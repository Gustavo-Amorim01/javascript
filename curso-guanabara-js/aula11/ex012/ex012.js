var agora = new Date()
var hora = agora.getHours
console.log (`Agora são exatamente ${hora} hora(s)`)
  if ( hora < 12) {
    console.log (`Bom dia!`)
} else if ( hora < 18) {
    console.log ('boa tarde!')
} else if ( hora <= 24){
    console.log (`Boa noite!`)
} else {
    console.log (`[ERRO] Este valor não existe, tente um valor aceitável`)
}
