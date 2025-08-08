function inserirNome (){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}


inserirNome();

let disciplinas = ["Português", "Matemática","Física", "Química"];

const item = document.querySelector("#lista");
item.textContent = disciplinas[0] + ' - ' +  disciplinas[1] + ' - ' +  disciplinas[2] + ' - ' +  disciplinas[3];

