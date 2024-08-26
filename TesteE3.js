function calcularFrete(peso, distancia, tabelaPrecos) {
    
    const faixaPeso = `${peso <= 1 ? '0-1' : '5-10'}`;
    const faixaDistancia = `${distancia <= 5 ? '0-5' : '6-10'}`;
    
    
    const chave = `${faixaPeso},${faixaDistancia}`;
    
    
    return tabelaPrecos[chave] || 'Tabela de preços não cobre esta faixa.';
    
}


const tabelaPrecos = {

    '0-1,0-5': 10.0, 
    '0-1,6-10': 15.0, 
    '1-5,0-5': 20.0, 
    '1-5,6-10': 25.0, 
    '5-10,0-5': 30.0, 
    '5-10,6-10': 35.0 

};


const peso = 3; 
const distancia = 7; 

const valorFrete = calcularFrete(peso, distancia, tabelaPrecos);
console.log(`Valor do frete: R$ ${valorFrete}`);
