var nota=92;
var notaChar = '';

if(nota < 60){
    notaChar = 'F';
}else if(nota <= 69 ){
    notaChar = 'D'
}else if(nota <= 79){
    notaChar = 'C'
}else if(nota <= 89){
    notaChar = 'B';
}else if(nota <= 100){
    notaChar = 'A';
}
else{
    throw new Error("Insira uma nota válida!");
}

console.log(`A nota do aluno foi ${notaChar}`);