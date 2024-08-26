function verificarDisponibilidade(sku, produtos) {
    
    const produto = produtos.find(item => item.sku === sku);
    
    
    if (produto && produto.quantidade > 0) {
        return true;
    }
    
    
    return false;
}


const produtos = [

    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
    
];


const sku = 1002; 

const disponivel = verificarDisponibilidade(sku, produtos);
console.log(disponivel ? "Produto disponível em estoque." : "Produto indisponível em estoque.");
