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

    if(ingressoEscolhido=='pista') {
        pista = pista - quantidadeEscolhida;
        bilheteria().bilheteriaPista.textContent = pista;
    } else if(ingressoEscolhido=='superior') {
        superior = superior - quantidadeEscolhida;
        bilheteria().bilheteriaSuperior.textContent = superior;
    } else {
        inferior = inferior - quantidadeEscolhida;
        bilheteria().bilheteriaInferior.textContent = inferior;
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

bilheteria()