const btCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefas = document.getElementsByClassName('tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaCompletos = document.getElementById('remover-finalizados');
const botaoSalvaTarefas = document.getElementById('salvar-tarefas');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
const tarefasCompletas = document.getElementsByClassName('tarefa completed');

function marcaTarefa(e) {
  for (let tarefa of tarefas) {
    tarefa.style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.id = 'selected'
}

function completaTarefa(e) {
  if (e.target.className === 'tarefa completed') {
    e.target.className = 'tarefa';
  } else {
    e.target.className = 'tarefa completed';
  }
}


btCriarTarefa.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.className = 'tarefa';
   tarefa.addEventListener('click', marcaTarefa);
  tarefa.addEventListener('dblclick', completaTarefa);
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
});

botaoApagaTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

botaoApagaCompletos.addEventListener('click', () => {
  for(let i = tarefasCompletas.length - 1; i >= 0; i--){
    tarefasCompletas[i].remove()
  }
});

botaoSalvaTarefas.addEventListener('click', () => {
  localStorage.setItem('lista', JSON.stringify(listaTarefas.innerHTML));
});

function carregaPagina(){
  const listaSalva = JSON.parse(localStorage.getItem('lista'));
  listaTarefas.innerHTML = listaSalva;
}

window.onload = function() {
  carregaPagina();
};

// Adiciona evento para mover a tarefa selecionada para a posição superior, se houver
botaoMoverCima.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');
  if (tarefaSelecionada.previousElementSibling && tarefaSelecionada){
    listaTarefas.insertBefore(tarefaSelecionada, tarefaSelecionada.previousElementSibling);
  }
})

// Adiciona evento para mover a tarefa selecionada para a posição inferior, se houver
botaoMoverBaixo.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');

  if (tarefaSelecionada.nextElementSibling && tarefaSelecionada){
    listaTarefas.insertBefore(tarefaSelecionada.nextElementSibling, tarefaSelecionada);
  }
});

botaoRemoverSelecionado.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');
  if(tarefaSelecionada){
    listaTarefas.removeChild(tarefaSelecionada);
  }
});
