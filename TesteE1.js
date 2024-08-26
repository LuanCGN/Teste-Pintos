function calcularValorTotal(valorParcela, numeroParcelas, taxaJurosMensal) {

    const i = taxaJurosMensal;

    const n = numeroParcelas;

    const valorTotal = valorParcela * ((Math.pow(1 + i, n) - 1) / i);
    return valorTotal;
    
}

const valorParcela = 1000;

const numeroParcelas = 12; 

const taxaJurosMensal = 0.02; 

const valorTotal = calcularValorTotal(valorParcela, numeroParcelas, taxaJurosMensal);
console.log(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);
