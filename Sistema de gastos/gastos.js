
//declara o objeto dinheiro com dois arrays como propriedade:
let dinheiro = {
    receitas: [ 100, 10, 3000],
    despesas: [2000, 100, 500]
}


//função responsável por fazer esse cálculo:
function lucro(arrayR, arrayD){
    let receitaTotal=0;
    let despesaTotal=0;


    //pega todos um valor do Array despesas e joga em value e depois soma value a despesa total. Esse processo repete com todos os elementos do array
   for(let value of arrayD){
   
       despesaTotal += value;
   } 

   //semelhante o de cima mas com o array receitas. Eles estão usando um For of
    for(let value of arrayR){
        
        receitaTotal += value;
    }


    //expõe os valores coletados acima e usa o toFixed(2) para dizer que os números só poderão ter até duas casas decimais.
    console.log(`A receita total foi de R$ ${receitaTotal.toFixed(2)} reais`);
    console.log(`A despesa total foi de R$ ${despesaTotal.toFixed(2)} reais`);

    if(despesaTotal > receitaTotal){
        console.log("A família está com saldo negativado!")
    }else if(receitaTotal > despesaTotal){
        console.log("A família está com saldo positivo!")
    }
}

//chama a função passando os valores dos dois arrays do objeto dinheiro
 lucro(dinheiro.receitas, dinheiro.despesas);
