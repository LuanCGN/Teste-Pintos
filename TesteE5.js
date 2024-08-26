function gerarRelatorioVendas(vendas, dataInicio, dataFim) {
    
    const inicio = new Date(dataInicio);

    const fim = new Date(dataFim);

    
    const totalPorSku = {};

    
    let valorTotalPeriodo = 0;

    
    vendas.forEach(venda => {
        const dataVenda = new Date(venda.data);

        
        if (dataVenda >= inicio && dataVenda <= fim) {
           
            if (!totalPorSku[venda.sku]) {
                totalPorSku[venda.sku] = { quantidade: 0, valorTotal: 0 };
            }
            totalPorSku[venda.sku].quantidade += venda.quantidade;
            totalPorSku[venda.sku].valorTotal += venda.valorTotal;

            
            valorTotalPeriodo += venda.valorTotal;

        }
        
    });

   
    const relatorio = {
        totalPorSku,
        valorTotalPeriodo
    };

    return relatorio;
}


const vendas = [

    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }

];


const dataInicio = '2021-01-01';
const dataFim = '2021-01-02';

const relatorio = gerarRelatorioVendas(vendas, dataInicio, dataFim);
console.log('Relatório de Vendas:', relatorio);


