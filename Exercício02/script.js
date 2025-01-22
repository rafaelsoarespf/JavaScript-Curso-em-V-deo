var img = document.createElement('img')
img.setAttribute('id', 'foto')
img.setAttribute('src', 'foto-bebe-m.png')
function verificar() {
    var data = new Date()
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    } else {
        var vsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(vsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-adolecente-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        }else if(vsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-adolecente-f.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}