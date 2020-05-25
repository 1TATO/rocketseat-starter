listElement = document.querySelector('#app ul');
inputElement = document.querySelector('#app input');
btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  //limpa os itens anteriores da lista 
  listElement.innerHTML = '';

  for (todo of todos) {
    //criando cada elemento da lista
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    //criando o botao de excluir
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');

    //pega a posicao de cada elemento dentro do array
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  //pegando o valor do input
  var todoText = inputElement.value;

  //adicionando o valor no array
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}