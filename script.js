function inserirNome (){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}


inserirNome();

let disciplinass = ["Português", "Matemática","Física", "Química"];

const item = document.querySelector("#lista");
item.textContent = linguagens[0] + ' - ' +  linguagens[1] + ' - ' +  linguagens[2] + ' - ' +  linguagens[3];
//item.textContent = linguagens; 
