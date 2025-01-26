let lista = []

//adicionar----------------------------------------------
function adicionar(){
    let inputNumero = document.getElementById('input-numero')
    let numero = Number(inputNumero.value)
    let selectListaDeNumeros = document.getElementById('select-lista-de-numeros')
    let divResultado = document.getElementById('div-resultado')
        

    // !verificarNumero(inputNumero.value) -> recebe true se o número for inválido
    // verificarNumeroNaLista(inputNumero.value) -> recebe true se o número já estiver na lista 
    if(!verificarNumero(numero) || verificarNumeroNaLista(numero)){
        alert('Valor inválido ou já encontrado na lista')

    }else{ 
        lista.push(numero)
        option = document.createElement('option')
        option.text = `Valor ${numero} adicionado.`
        selectListaDeNumeros.appendChild(option)
    }
    inputNumero.value = ''
    inputNumero.focus()

}

//finalizar----------------------------------------------
function finalizar(){
    
    
    //se a lista estiver vazia
    if(lista.length == 0){
        alert('Adicione valores antes de finalizar!')
    
    }else{
        lista.sort()
        
        //variaveis
        let divResultado = document.getElementById('div-resultado')
        let totalDeElementos = lista.length
        let maiorValor = lista[totalDeElementos - 1]
        let menorValor = lista[0]
        let soma = 0
        let media = 0

        //calculando variavel soma
        for(let contador in lista){
            soma += lista[contador] 
        }

        //calculando media
        media = soma/totalDeElementos

        //resultado
        divResultado.innerHTML = ''
        divResultado.innerHTML += `<p>Ao todo temos ${totalDeElementos} números cadastrados</p>`
        divResultado.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`
        divResultado.innerHTML += `<p>O menor valor informado foi ${menorValor}</p>`
        divResultado.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        divResultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

//verificarNumero----------------------------------------------
function verificarNumero(numero){
    
    //se número for válido retorna true
    if(Number(numero) > 0 && Number(numero) < 101){
        return true 
    }
    //se não for válido retorna false
    return false
}

//verificarNumeroNaLista----------------------------------------------
function verificarNumeroNaLista(numero){
    
    //se não encontrar o numero na lista vai retornar falso
    if(lista.indexOf(Number(numero)) == -1){
        return false
    }
    return true
}

