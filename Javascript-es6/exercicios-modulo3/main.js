import axios from 'axios';

//3.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}

umPorSegundo();

//3.2
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)

    console.log(response.data);
  }
  catch (err) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//3.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    }
    catch (err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('1TATO/be-the-hero');
Github.getRepositories('rocketseat/dslkvmskv');

//3.4
const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  }
  catch (err) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('1TATO');