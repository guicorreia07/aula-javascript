
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com");
    //window.location.href = "https://google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada.");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function validadeIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
*/

/*
var idade = prompt("Qual sua idade?")
console.log(validadeIdade(idade));

function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"pêra", cor:"verde"}, {nome:"laranja", cor:"laranja"}]
console.log(frutas);
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
//var lista = ["maçã", "pêra", "laranja"]
//lista.push("uva");
//lista.pop();
//alert(lista[1])
//console.log(lista[1]);
//console.log(lista.length());
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "))
*/

/*
//var nome = "Guilherme Correia";
//var idade = 17;
//var idade2 = 10;
//var n1 = 1;
//var n2 = 2;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase);
//alert(frase.replace("Japão", "Brasil"));
*/