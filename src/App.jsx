import Perfil from './components/Perfil'
import ReposList from './components/ReposList'
import Formulario from './components/Formulario'

function App() {
  // let estaDeDia = false
  // const nome = "Andrey"
  // const pessoa = {
  //   nome: "Andrey",
  //   idade: 21,
  //   altura: 1.80
  // }

  // function retornaNome() {
  //   return nome
  // }

  return (
    <>
      <Perfil nomeUsuario="Andrey-Santos"/>
      <ReposList nomeUsuario="Andrey-Santos"/>
      {/* <Formulario /> */}


      {/* <h1>Olá, {pessoa.nome}</h1>
      <h2>Sub-titulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa tarde'} */}
    </>
  );
}

export default App;
