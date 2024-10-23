import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'; 

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Purpose: undefined;
  Login: undefined;
  Cadastro: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Icon name="user-circle" style={styles.icon} size={50} color={'white'} />
      <Text style={styles.title}>Faça seu cadastro</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome completo*</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          placeholderTextColor="#999"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de nascimento*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua data de nascimento"
          placeholderTextColor="#999"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loadingAuth}>
        {loadingAuth ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Enviar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color={'white'} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Parabéns! Sua inscrição foi enviada com sucesso!</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020', // fundo escuro como no login
  },
  icon: {
    fontSize: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontWeight: '500',
    marginBottom: 5,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    fontSize: 16,
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
    marginRight: 280,
  },
  backText: {
    fontSize: 15,
    marginLeft: 5,
    color: 'white',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#202020',
  },
  modalButton: {
    backgroundColor: '#6a1b9a',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
