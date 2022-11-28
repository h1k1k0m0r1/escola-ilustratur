function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3)/3 ;

    if(media >= 70)
     if(media==69)
    alert("Uau! Aprovado");
    
     else
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Reprovado!")

   };

//é a vida

// Concatenar strings
let valor01 = 100;
let valor02 = 100 ;
let valor03 = 100;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 *
valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);