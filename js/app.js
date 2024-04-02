//puxa a quantidade de ingressos disponíveis da bilheteria
let pista = parseInt(bilheteria().bilheteriaPista.textContent);
let superior = parseInt(bilheteria().bilheteriaSuperior.textContent);
let inferior = parseInt(bilheteria().bilheteriaInferior.textContent);

//função de ação do botão comprar
function comprar() {
    //pegar o tpo de ingresso escolhido
    let ingressoEscolhido = document.getElementById('tipo-ingresso').value;
    //pegar a quantidade de ingresso
    let quantidadeEscolhida = parseInt(document.getElementById('qtd').value);


    //atualiza ingresso escolhido
    if(ingressoEscolhido=='pista') {
        if(verificaDisponibilidade(pista, quantidadeEscolhida)){
            pista = pista - quantidadeEscolhida;
            bilheteria().bilheteriaPista.textContent = pista;
        } else {
            alert('Ingressos insuficientes');
        }
    } else if(ingressoEscolhido=='superior') {
        if(verificaDisponibilidade(superior, quantidadeEscolhida)) {
            superior = superior - quantidadeEscolhida;
            bilheteria().bilheteriaSuperior.textContent = superior;     
        } else {
            alert('Ingressos insuficientes');
        }
    } else {
        if(verificaDisponibilidade(inferior, quantidadeEscolhida)){
            inferior = inferior - quantidadeEscolhida;
            bilheteria().bilheteriaInferior.textContent = inferior;
        } else {
            alert('Ingressos insuficientes');
        }
    }
}

//função responsável por puxar o caminho das informações da bilheteria
function bilheteria() {
    let bilheteriaPista = document.getElementById('qtd-pista');
    let bilheteriaSuperior = document.getElementById('qtd-superior');
    let bilheteriaInferior = document.getElementById('qtd-inferior');

    return {
        bilheteriaPista,
        bilheteriaSuperior,
        bilheteriaInferior
    }
}

function verificaDisponibilidade(quantiaDisponivel, quantidadeEscolhida) {
    if(quantiaDisponivel < quantidadeEscolhida) {
        return(false);
    } else {
        return(true);
    }
}

bilheteria()