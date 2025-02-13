const form = document.getElementById('formulario');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festa">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">';

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';

const atividades = [];
const notas = [];


function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade '${inputNomeAtividade.value}' já foi inserida`);
    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}

function atualizarMediaFinal() {

    mediaFinal = calculaMediaFinal();

    document.getElementById('media_valor').innerHTML = mediaFinal;

    document.getElementById('media_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}



form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

    atualizarMediaFinal();

});

