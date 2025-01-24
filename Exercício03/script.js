function contar(){
    let inicio = document.getElementById('input-inicio').value
    let fim = document.getElementById('input-fim').value
    let passos = document.getElementById('input-passos').value
    let resultado = document.getElementById('resultado')

    if( inicio.length == 0 || fim.length == 0 || passos.length == 0 ){
        window.alert('[ERRO] Faltam dados!')

    } else {
        if( passos < 1){
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        resultado.innerHTML = "Contando: \n"
        

        if(parseInt(inicio) < parseInt(fim)){
            for(let contador = inicio; contador <= fim; contador = parseInt(contador) + parseInt(passos)){        
                resultado.innerHTML += " " + contador + " 👉 "
            }
        }else{
            for(let contador = inicio; contador >= fim; contador = parseInt(contador) - parseInt(passos)){        
                resultado.innerHTML += " " + contador + " 👉 "
            }
        }
        
        resultado.innerHTML += " 🏁 "
    }
}