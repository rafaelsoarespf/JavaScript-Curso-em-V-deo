function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = "#f4d68e"
    } else if(hora > 12 && hora < 19){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = "#a97b66"
    } else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = "#464948"
    }
}