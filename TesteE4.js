function atualizarEstoque(itensVendidos, estoque) {
    
    const estoqueMap = new Map();
    
    
    estoque.forEach(item => {
        estoqueMap.set(item.sku, item.quantidade);
    });
    
    
    itensVendidos.forEach(venda => {
        if (estoqueMap.has(venda.sku)) {
            
            let quantidadeAtual = estoqueMap.get(venda.sku);
            
            
            quantidadeAtual -= venda.quantidade;
            
            
            estoqueMap.set(venda.sku, quantidadeAtual);
        }
    });
    
    
    return Array.from(estoqueMap, ([sku, quantidade]) => ({ sku, quantidade }));

}


const itensVendidos = [

    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }

];


const estoque = [

    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
    
];


const estoqueAtualizado = atualizarEstoque(itensVendidos, estoque);
console.log('Estoque atualizado:', estoqueAtualizado);
