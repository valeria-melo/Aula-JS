//Inner
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
   // console.log(document.getElementById("agradecimento"));

}
function redirecionar(){
    window.open("https://www.linkedin.com/in/valeriamelotech/") //--> Encaminha para outra page
    //window.location.href = "https://www.linkedin.com/in/valeriamelotech/" //Direciona na mesma pagina
}


function trocar(elemento){
    //document.getElementById("mousemover").innerHTML = "Obrigada por passar o mouse aqui";
    elemento.innerHTML = "Obrigada por passar o mouse aqui"
}

function voltar(elemento){
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//DICIONARIO
//var fruta = {nome:"maca",cor:"vermelha"};
//console.log(fruta.nome);
//console.log(fruta);
//console.log(fruta.cor);

//var fruta = [{nome:"maca",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
//console.log(fruta);
//console.log(fruta[1].nome);

//CONDICIONAL

//var idade = prompt("Qual é a sua idade");
//if(idade >= 18){
    //alert ("Maior de idade");
//} else {
    //alert("Menor de idade")
//}

// var count = 0;
// while (count >=5){
   // console.log(count);
  //  alert(count)
     //count = count + 1;
  //   count++;
// }

//FOR
//var count ;
//for(count = 0; count <=5; count++){
    //alert(count)

//}

//var count;
//for(count = 1; count <=5; count++){
//alert(count)
//}

//DATA
//var d = new Date()
    //alert(d)
//MES
//var d = new Date()
//alert (d.getMonth()+1)
//MINUTOS
//var d = new Date()
//alert(d.getMinutes())
//HORAS
//var d = new Date()
//alert(d.getSeconds())

//Function
//function soma (n1,n2){
   // return n1+n2
//}
//alert(soma(5,10));

//FUNCTION REPLACE
//function setReplace(frase, nome, novo_nome){
    //return frase.replace(nome,novo_nome)

//}
//alert(setReplace("Vai Japão", "Japão", "Brasil"))

/*FUNCTION IDADE - com variavel local
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
        
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade));*/

    //FUNCTION IDADE COM RETURN

    /*function validaIdade(idade){
        var validar;
        if (idade >= 18){
            return true
         } else {
             return false
         }
        }
    var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade));*/

    //FUNCTION IDADE COM VARIAVEL GLOBAL

   /* var validar = 0

    function validaIdade (idade){
        if(idade >=18){
            return true
        }else{
            return false
        }
    }
    var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade)); */
    

//ARRAY
//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "))


//var nome = "Valeria Melo"
//var n1 = 5;
//var n2 = 3;
    //alert( nome + " " + "tem " + idade + " anos.")
    //alert(idade+idade1)
    //console.log(n1*n2)
    //console.log(frase.ToLowerCase());
//var frase = 'Japão é o melhor time do junto'
//console.log(frase.replace("Japão", "Brasil"));
