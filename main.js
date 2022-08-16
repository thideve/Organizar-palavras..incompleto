Nomes = [];

function submit()
{
var display_nome = [];

for (var a = 1; a<= 4; a++)
{
var NomesDosEstudantes = document.getElementById("nameOfTheStudent"+a).value;
console.log(NomesDosEstudantes);
Nomes.push(NomesDosEstudantes);
}
console.log(Nomes);

var comprimentoMatrixNome = Nomes.lenght;
console.log(comprimentoMatrixNome);

for (var b=0; b<comprimentoMatrixNome; b++)
{
display_nome.push("<h4>Nome"+ Nomes[b]+ "</h4>");
console.log(display_nome);

}
var removeCommas = display_nome.join(" ");
 console.log(removeCommas);
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";

}