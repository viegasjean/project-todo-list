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
const tarefasCompletas = document.getElementsByClassName('completed');

// Função para desmarcar todas as tarefas e marcar somente o alvo
function marcaTarefa(e) {
  for (const tarefa of tarefas) {
    tarefa.id = '';
  }
  e.target.id = 'selected';
}

// Função para marcar a tarefa como completa
function completaTarefa(e) {
  if (e.target.className === 'tarefa completed') {
    e.target.className = 'tarefa';
  } else {
    e.target.className = 'tarefa completed';
  }
}

// botão para criar a tarefa e adicionar dois event listener
btCriarTarefa.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('dblclick', completaTarefa);
  tarefa.addEventListener('click', marcaTarefa);
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
});

// Ação para botão de apagar tudo, insere html vazio no lugar da lista
botaoApagaTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

// Ação para apagar todas as tarefas marcadas como completas, da ultima para a primeira
botaoApagaCompletos.addEventListener('click', () => {
  for (let i = tarefasCompletas.length - 1; i >= 0; i -= 1) {
    tarefasCompletas[i].remove();
  }
});

// Botão para converter em string e salvar o html listaTarefas no local storage
botaoSalvaTarefas.addEventListener('click', () => {
  localStorage.setItem('lista', JSON.stringify(listaTarefas.innerHTML));
});

// Ao carregar a página converte de volta para HTML e o carrega
window.onload = () => {
  const listaSalva = JSON.parse(localStorage.getItem('lista'));
  listaTarefas.innerHTML = listaSalva;
};

// Adiciona evento para mover a tarefa selecionada para a posição superior, se houver
botaoMoverCima.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');
  if (tarefaSelecionada && tarefaSelecionada !== tarefaSelecionada.parentNode.firstElementChild) {
    tarefaSelecionada.parentNode.insertBefore(tarefaSelecionada,
      tarefaSelecionada.previousElementSibling);
  }
});

// Adiciona evento para mover a tarefa selecionada para a posição inferior, se houver
botaoMoverBaixo.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');
  if (tarefaSelecionada && tarefaSelecionada !== tarefaSelecionada.parentNode.lastElementChild) {
    tarefaSelecionada.nextElementSibling.insertAdjacentElement('afterend', tarefaSelecionada);
  }
});

// Ação para remover somente a tarefa que estiver selecionada
botaoRemoverSelecionado.addEventListener('click', () => {
  const tarefaSelecionada = document.getElementById('selected');
  if (tarefaSelecionada) {
    listaTarefas.removeChild(tarefaSelecionada);
  }
});
