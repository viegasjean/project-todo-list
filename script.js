const btCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefas = document.getElementsByClassName('tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaCompletos = document.getElementById('remover-finalizados');
const tarefasCompletas = document.getElementsByClassName('tarefa completed');

function marcaTarefa(e) {
  for (let tarefa of tarefas) {
    tarefa.style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completaTarefa(e) {
  if (e.target.className === 'tarefa completed') {
    e.target.className = 'tarefa';
  } else {
    e.target.className = 'tarefa completed';
  }
}

function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', marcaTarefa);
  tarefa.addEventListener('dblclick', completaTarefa);
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}
btCriarTarefa.addEventListener('click', criaTarefa);

botaoApagaTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

botaoApagaCompletos.addEventListener('click', () => {
  for (let i in tarefasCompletas){
    tarefasCompletas[0].remove();
  }
});
