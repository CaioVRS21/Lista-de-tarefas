
const tarefa = document.querySelector('.novaTarefa');
const btnTarefa = document.querySelector('.btnAddTarefa');
const listaTarefas = document.querySelector('.terefas');


tarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      if (!tarefa.value) return;
      addTarefa(tarefa.value);
    }
  });

function addTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    listaTarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
    }

    btnTarefa.addEventListener('click', function() {
        if (!tarefa.value) return;
        addTarefa(tarefa.value);
      });

function limpaInput(){
    tarefa.value = '';
    tarefa.focus();
}

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
    