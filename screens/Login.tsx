import React, {useState} from "react";
import {View,Text,TextInput,TouchableOpacity,
    Alert,} from  'react-native';
import AsyncStorage from 
"@react-native-async-storage/async-storage";
import styles from "../styles";

interface Usuario {
    nome:string;
    email:string;
    senha:string;
}
interface LoginProps{
    onLogin: (nome:string) => void;
    irParaCadastro: () => void;
}

export default function Login({
    onLogin,
    irParaCadastro
}
:LoginProps){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function fazerLogin() {
        if(email.trim()==='' || senha.trim()===''){
            Alert.alert('Atenção','Preencha o e-mail e a senha.');
            return;
        }
        try{
            const usuarioSalvo = await AsyncStorage.getItem(
                '@sistema_login:usuario');
            if (usuarioSalvo === null) {
                Alert.alert('Erro','Nenhum usuário cadastrado');
                return;
            }
            const usuario: Usuario = JSON.parse(usuarioSalvo);
            if(email.trim().toLowerCase() === usuario.email.toLowerCase() && 
        senha === usuario.senha){
                onLogin(usuario.nome);
                setEmail('');
                setSenha('');
            }else{
                Alert.alert('Erro','E-mail ou senha não cadastrado');
            }
        }catch(error){
            console.log(error);
            Alert.alert('Erro','Não foi possível realizar o Login');
        }
    }
    return (
    <View style={styles.containerLogin}>

      <Text style={styles.titulo}>
        Sistema de Login
      </Text>


      <Text style={styles.subtitulo}>
        Entre com seus dados
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />


      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={fazerLogin}
      >

        <Text style={styles.textoBotao}>
          ENTRAR
        </Text>

      </TouchableOpacity>


      <Text style={styles.textoCadastro}>
        Ainda não possui uma conta?
      </Text>


      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={irParaCadastro}
      >

        <Text style={styles.textoBotaoSecundario}>
          CADASTRAR USUÁRIO
        </Text>

      </TouchableOpacity>

    </View>
  );
}