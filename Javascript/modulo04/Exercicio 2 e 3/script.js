// inputElement = document.querySelector('#app input');
// listElement = document.querySelector('#app ul');
// btnElement = document.querySelector('#app button');

// var user = inputElement.value;

// function getRepo() {
//   axios.get(`https://api.github.com/users/${user}/repos`)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.warn(error);
//     });
// }

// btnElement.onclick = getRepo;

// function addList(repositorio) {
//   for (repo of repositorio) {
//     var user = inputElement.value;

//     var item = document.createElement('li');
//     var name = document.createTextNode(repo.name);

//     item.appendChild(name);
//     name.appendChild(item);

//     getRepo();
//   }
// }

var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");
const getUserRepo = name => {
  var user = inputName.value;
  if (!user) {
    renderError();
    alert("Preencha o campo");
  }
  renderLoading();
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      fillList(response.data);
    })
    .catch(error => {
      alert("Não foi possível efetuar a busca!");
      renderError(error);
    });
};

function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

function renderError(loading) {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}

const fillList = repositorios => {
  console.log("TCL: repositorios", repositorios);
  dataList.innerHTML = "";

  for (repo of repositorios) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement("li");

    repoItem.appendChild(reponame);
    dataList.appendChild(repoItem);
  }
};