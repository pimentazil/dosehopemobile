import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<RootStackParamList>;

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Purpose: undefined;
  Login: undefined;
  Cadastro: undefined;
  Inicio: undefined
};

export default function Login() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [showRedefinirSenha, setShowRedefinirSenha] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const handleEsqueciMinhaSenha = () => {
    setShowRedefinirSenha(true);
  };

  return (
    <View style={styles.container}>
      <Icon name="user-circle" style={styles.icon} size={50} color={'white'}/>

      <Text style={styles.title}>Bem-vindo(a) de volta!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity >
          <Text style={styles.link}>Não tem uma conta? <Text style={styles.linkBold} onPress={() => navigation.navigate('Cadastro')}>Registre-se</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEsqueciMinhaSenha}>
          <Text style={styles.link2}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} disabled={loadingAuth}>
        {loadingAuth ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText} onPress={() => navigation.navigate("Inicio")}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} >
        <Icon name="arrow-left" size={20} color={'white'}/>
        <Text style={styles.backText} onPress={() => navigation.navigate('Home')}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020', 
  },
  icon: {
    fontSize: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontWeight: '500',
    marginBottom: 5,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    fontSize: 16,
  },
  linkContainer: {
    width: '110%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 40
  },
  link: {
    fontSize: 15,
    color: 'white'
  },
  link2: {
    fontSize: 15,
    color: '#920092',
    marginTop: 20,
    fontWeight: '600',
  },
  linkBold: {
    color: '#920092',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#6a1b9a',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    marginTop: 50,
    color: 'white',
    textAlign: 'left',
    marginRight: 280
  },
  backText: {
    fontSize: 15,
    marginLeft: 5,
    color: 'white'

  },
});
