const numeroSenha = document.querySelector(".parametros-senha__texto");
const botaoSenha = document.querySelectorAll(".parametros-senha__botao");
const campoSenha = document.querySelector("#campo-senha");

let tamanhoSenha = 4;
numeroSenha.textContent = tamanhoSenha;

//console.log(botaoSenha);

botaoSenha[0].onclick = diminuiTamanhoSenha = () => {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
};

botaoSenha[1].onclick = aumentaTamanhoSenha = () => {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
};
const checkbox = document.querySelectorAll(".checkbox");

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = () => {
        gerarSenha();
    };
} 

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

campoSenha.value = letrasMaiusculas;
gerarSenha();

function gerarSenha() {
    let alfabeto = "";
    if (checkbox[0].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto += numeros;
    }
    if (checkbox[3].checked) {
        alfabeto += simbolos;
    }
    console.log(alfabeto);
    
    let senhaGerada = "";
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        //console.log(letrasMaiusculas[numeroAleatorio]);
        senhaGerada += alfabeto[numeroAleatorio];
    }
    campoSenha.value = senhaGerada;
}