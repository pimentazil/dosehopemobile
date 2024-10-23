import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import Footer from '@/src/components/Footer';
import { Header } from '@/src/components/Header';

export default function Inicio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    { question: 'Como faço para doar medicamento?', answer: 'Você pode doar medicamentos indo até o local X...' },
    { question: 'Como faço para entregar o medicamento doado?', answer: 'Você receberá um e-mail com as informações...' },
    { question: 'Posso doar medicamentos vencidos?', answer: 'Não, não aceitamos medicamentos vencidos...' },
    { question: 'Preciso de medicamentos controlados, posso solicitar na lista de espera?', answer: 'Sim, mas será necessário ter receita médica...' },
    { question: 'Posso doar ou receber medicamentos para Pets?', answer: 'Sim, aceitamos medicamentos para Pets...' },
    { question: 'Existe algum custo?', answer: 'Não há nenhum custo envolvido...' },
    { question: 'Como serei avisado sobre a doação?', answer: 'Você receberá um e-mail com as informações...' },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.mainSection}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Doe e receba <Text style={styles.highlight}>medicamentos</Text>
          </Text>
          <Text style={styles.description}>
            Conectando pessoas para compartilhar empatia, doar e receber medicamentos de forma simples.
          </Text>
          <TouchableOpacity
            style={styles.donateBtn}

          >
            <Text style={styles.buttonText}>Quero doar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://www.ceder.med.br/_next/image?url=%2Fimg-hero-ceder-light.webp&w=640&q=70' }}
            style={styles.mainImage}
          />
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>🌱</Text>
          <Text style={styles.infoText}>
            Nosso objetivo é diminuir o impacto ambiental, reduzindo a incineração e o descarte incorreto.
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>❤️</Text>
          <Text style={styles.infoText}>
            Ajudar a promover a inclusão social a quem precisa facilitando o acesso a medicamentos de qualidade.
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>💊</Text>
          <Text style={styles.infoText}>
            Melhorar o acesso a medicamentos que possam estar em falta nas redes públicas.
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>🐾</Text>
          <Text style={styles.infoText}>
            Disponibilizar acesso ao tratamento veterinário de qualidade através de medicamentos de qualidade.
          </Text>
        </View>
      </View>



      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>Perguntas Frequentes</Text>
        {faqs.map((faq, index) => (
          <TouchableOpacity
            key={index}
            style={styles.faqItem}
            onPress={() => toggleFAQ(index)}
          >
            <Text style={styles.faqQuestion}>
              {faq.question}
            </Text>
            {activeIndex === index && (
              <Text style={styles.faqAnswer}>
                {faq.answer}
              </Text>
            )}
          </TouchableOpacity>
        ))}
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  mainSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },
  content: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  highlight: {
    color: 'rgb(171, 2, 171)',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  donateBtn: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    marginTop: 20,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 100
  },
  infoSection: {
    marginTop: 40,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    marginLeft: 15
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginRight: 20
  },
  faqContainer: {
    marginTop: 40,
    padding: 20,
  },
  faqTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  faqItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#6A1B9A',
    paddingBottom: 10,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(171, 2, 171)',
  },
  faqAnswer: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});
