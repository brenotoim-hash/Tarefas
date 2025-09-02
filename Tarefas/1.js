const produto = []

produto.push({ nome: 'copo', preço: 12.50 });
produto.push({ nome: 'prato', preço: 23.00 });
produto.push({ nome: 'garfo', preço: 1.50 });
produto.push({ nome: 'faca', preço: 2.00 });
produto.push({ nome: 'colher', preço: 3.00 });
produto.forEach((p, i) => { console.log(i + 1, '-', p.nome, '-', 'R$', p.preço); });

