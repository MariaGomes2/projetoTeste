class Aluno {

    constructor(nome, idade, curso) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;

    }

}

const alunos = [];

function cadastrarAluno() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    const aluno = new Aluno(nome, idade, curso);

    alunos.push(aluno);

    mostrarAlunos();
}

function mostrarAlunos() {

    const listaAlunos = document.getElementById("listaAlunos");

    listaAlunos.innerHTML = "";

    alunos.forEach(function(aluno) {

        listaAlunos.innerHTML += `

            <div class="aluno">

                <p><strong>Nome:</strong> ${aluno.nome}</p>

                <p><strong>Idade:</strong> ${aluno.idade}</p>

                <p><strong>Curso:</strong> ${aluno.curso}</p>

            </div>

        `;

    });

}

document.getElementById("btnCadastrar").addEventListener("click", cadastrarAluno);