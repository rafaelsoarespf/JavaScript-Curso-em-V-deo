function gerarTabuada() {
    let numero = document.getElementById('input-numero')
    let tabuada = document.getElementById('tabuada')
    let n = Number(numero.value)
    if(numero.value.length == 0){
        window.alert('Por favor,digite um número!')
    } else{
        let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            c++
        }       
    }  
}

