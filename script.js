const btCriarTarefa = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const textoTarefa = document.getElementById('texto-tarefa')
const tarefas = document.getElementsByClassName('tarefa')
const botaoApagaTudo = document.getElementById('apaga-tudo')
const botaoApagaCompletos = document.getElementById('remover-finalizados')
const tarefasCompletas = document.getElementsByClassName('tarefa completed')

btCriarTarefa.addEventListener('click', criaTarefa)

function criaTarefa(){
  let tarefa = document.createElement('li')
  tarefa.innerText = textoTarefa.value;
  tarefa.className = 'tarefa'
  tarefa.addEventListener('click', marcaTarefa)
  tarefa.addEventListener('dblclick', completaTarefa)
  listaTarefas.appendChild(tarefa)
  textoTarefa.value = ''

}

function marcaTarefa(e){
  for (let tarefa of tarefas){
    tarefa.style.backgroundColor = ''
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function completaTarefa(e){
  if (e.target.className == 'tarefa completed'){
    e.target.className = 'tarefa'
  } else {
    e.target.className = 'tarefa completed'
  }
}

botaoApagaTudo.addEventListener('click', function(){
  listaTarefas.innerHTML = ''
})

botaoApagaCompletos.addEventListener('click', function(){
  for( let i in tarefasCompletas){
    tarefasCompletas[0].remove();
  }
})


