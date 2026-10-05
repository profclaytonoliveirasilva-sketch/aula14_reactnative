import React,{ useState } from "react";
import { SafeAreaView } from "react-native";

import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';

import styles from "./styles";

type Tela = 'login' | 'cadastro' | 'home';

export default function App() {
    
    const [tela,setTela] = useState<Tela>('login');
    const [nomeUsuario,setNomeUsuario] = useState('');

    function realizarLogin(nome:string){
      setNomeUsuario(nome);
      setTela('home');
    }
    function realizarLogout(){
      setNomeUsuario('');
      setTela('login');
    }

  return (    
    <SafeAreaView style={styles.container}>
      {tela === 'login' &&(
        <Login onLogin={realizarLogin} irParaCadastro = {()=> setTela('cadastro')}/>
      )}
      {tela === 'cadastro' &&(
        <Cadastro voltarParaLogin= {()=> setTela('login')}/>
      )}
      {tela === 'home' &&(
        <Home nome={nomeUsuario} onLogout= {realizarLogout}/>
      )}

    </SafeAreaView>

  );
}


