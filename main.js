function addTarefa(textoInput){
const tarefa = document.querySelector('.novaTarefa');
const btnTarefa = document.querySelector('.btnAddTarefa');
const listaTarefas = document.querySelector('.terefas');
const li = criaLi();

if(!tarefa.value) return;
li.innerHTML = tarefa.value;
listaTarefas.appendChild(li);
criaBotaoApagar(li);
limpaInput(tarefa);
salvarTarefas();
}

function limpaInput(textoInput){
    textoInput.value = '';
    textoInput.focus();
}

// function criaTarefa(textoInput) {
//     const li = criaLi();
//     li.innerText = textoInput;
//     listaTarefas.appendChild(li);
//     limpaInput();
//     criaBotaoApagar(li);
//     salvarTarefas();
//   }

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.innerText = 'Apagar Tarefa';
    li.appendChild(btnApagar);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = document.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefas of liTarefas){
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar Tarefa', '').trim();
        listaDeTarefas.push(tarefaTexto);
}
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaTarefasSalvas = JSON.parse(tarefasSalvas)
    console.log(listaTarefasSalvas)
    for (let atividade of listaTarefasSalvas){
        addTarefa(atividade)
    }
}
adicionaTarefasSalvas();
    