import Footer from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';

export default function Contribuir() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../../imagens/marcha.jpg')}
          style={styles.backgroundHome}>
        </ImageBackground>
      </View>

      <View style={styles.divMain}>
        <View style={styles.header}>
          <Text style={styles.title}>Escolha como você quer doar</Text>
          <Text style={styles.subtitle}>Para <Text style={{ fontWeight: 'bold', color: 'purple' }}>ajudar</Text> com qualquer valor é fácil:</Text>
        </View>

        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={() => setIsAccordionOpen(!isAccordionOpen)}>
          <View style={styles.accordionHeaderContent}>
            <Text style={styles.accordionTitle}>Pix</Text>
          </View>
        </TouchableOpacity>

        {isAccordionOpen && (
          <View style={styles.accordionContent}>
            <Text style={styles.pixText}>Chave Pix: <Text>CNPJ: 50.874.861/0001-77</Text></Text>
            <Text style={styles.pixInstructions}>
              Após efetuar a doação, por gentileza, envie-nos o comprovante pelo WhatsApp 11 5198-7389. Dessa forma, poderemos conhecê-lo(a) melhor e registrar sua contribuição em nossos registros.
            </Text>
          </View>
        )}
        <TouchableOpacity style={[styles.accordionHeader, styles.disabled]}>
          <View style={styles.accordionHeaderContent}>
            <Text style={[styles.accordionTitle, styles.disabledText]}>Boleto (Indisponível)</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.creditCardForm}>
          <Text style={styles.formTitle}>Cartão de Crédito</Text>
          <TextInput style={styles.input} placeholder="Nome no Cartão" placeholderTextColor="#ccc" />
          <TextInput style={styles.input} placeholder="Número do Cartão" placeholderTextColor="#ccc" />
          <View style={styles.row}>
            <TextInput style={styles.inputSmall} placeholder="Validade" placeholderTextColor="#ccc" />
            <TextInput style={styles.inputSmall} placeholder="CVV" placeholderTextColor="#ccc" />
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Doar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  backgroundContainer: {
    width: '95%',
    height: 100,
    borderRadius: 50,
    overflow: 'hidden', 
    marginLeft: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -50,
  },
  backgroundHome: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  divMain: {
    padding: 20,
    marginTop: 0
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginTop: 90,
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  accordionHeader: {
    backgroundColor: '#454545',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  accordionHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: {
    color: '#fff',
    fontSize: 18,
  },
  accordionContent: {
    padding: 15,
    backgroundColor: '#454545',
    borderRadius: 8,
    marginBottom: 10,
  },
  pixText: {
    color: '#fff',
    fontSize: 16,
  },
  pixInstructions: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  creditCardForm: {
    backgroundColor: '#454545',
    padding: 20,
    borderRadius: 8,
    marginBottom: 80
  },
  formTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  inputSmall: {
    backgroundColor: '#555',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
  },
  submitButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#555',
  },
  disabledText: {
    color: '#999',
    fontSize: 18,
  },
});
