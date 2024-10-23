import React from 'react';  
import { View, Text, StyleSheet, Dimensions } from 'react-native';  

const { width } = Dimensions.get('window');  

export default function Footer() {  
  return (  
    <View style={styles.footer}>  
      <View style={styles.main}>  
        <View style={styles.infoSection}>  
          <Text style={styles.title}>Dose de Esperança</Text>  
          <Text style={styles.paragraph}>  
            Criado por estudantes de Tecnologia, a Dose de Esperança leva atendimento médico humanizado e recorrente às populações mais vulneráveis da sociedade.  
          </Text>  
        </View>  
        <View style={styles.location}>  
          <Text style={styles.locationTitle}>Onde estamos</Text>  
          <Text style={styles.locationText}>Barueri - SP</Text>  
        </View>  
        {/* <View style={styles.contact}>  
          <Text style={styles.contactTitle}>Contato</Text>  
          <View style={styles.contactItem}>  
            <Text style={styles.contactText}>Whatsapp</Text>  
          </View>  
          <View style={styles.contactItem}>  
            <Text style={styles.contactText}>dosedeesperanca@gmail.com</Text>  
          </View>  
          <View style={styles.contactItem}>  
            <Text style={styles.contactText}>Instagram</Text>  
          </View>  
        </View>   */}
      </View>  
      <View style={styles.footerSection}>  
        <Text style={styles.footerText}>Copyright © 2023, Dose de Esperança. Todos os direitos reservados</Text>  
      </View>  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  footer: {  
    borderTopWidth: 1,  
    borderTopColor: '#ffffff1a',  
    paddingVertical: 20,  
    paddingHorizontal: 10,  
    marginTop: 40
  },  
  main: {  
    flexDirection: 'column', 
    alignItems: 'flex-start',   
    marginBottom: 10,  
  },  
  infoSection: {  
    marginBottom: 15,  
  },  
  location: {  
    marginBottom: 15,  
  },  
  contact: {  
    marginBottom: 15,  
  },  
  title: {  
    fontSize: width > 600 ? 25 : 20,  
    color: 'white',  
  },  
  paragraph: {  
    fontSize: width > 600 ? 15 : 13, 
    color: 'white',  
  },  
  locationTitle: {  
    fontSize: width > 600 ? 20 : 18, 
    color: 'white',  
  },  
  locationText: {  
    fontSize: width > 600 ? 15 : 13,  
    color: 'white',  
  },  
  contactTitle: {  
    fontSize: width > 600 ? 20 : 18, 
    color: 'white',  
  },  
  contactItem: {  
    marginBottom: 5,  
  },  
  contactText: {  
    fontSize: width > 600 ? 15 : 13, 
    color: 'white',  
  },  
  footerSection: {  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  footerText: {  
    fontSize: width > 600 ? 14 : 12,  
    color: 'white',  
    marginBottom: 20
  },  
});