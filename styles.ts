import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f2f2f2',
  },


  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },


  subtitulo: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },


  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },



  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },


  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


  botaoSecundario: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },


  textoBotaoSecundario: {
    color: '#007bff',
    fontSize: 15,
    fontWeight: 'bold',
  },


  textoCadastro: {
    marginTop: 15,
    marginBottom: 10,
    color: '#666',
    fontSize: 14,
  },


  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f2f2f2',
  },


  tituloHome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },


  nomeUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 15,
  },


  mensagemHome: {
    fontSize: 17,
    color: '#555',
    marginBottom: 30,
  },


  botaoSair: {
    width: 200,
    height: 50,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

});


export default styles;