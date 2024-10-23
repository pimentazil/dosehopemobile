import Footer from '@/src/components/Footer';
import { HeaderHome } from '@/src/components/HeaderHome';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const codeStringStart = '{';
const codeStringEnd = '}';

const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.home}>
                <HeaderHome />
                <ImageBackground source={require('../../imagens/background.jpg')} style={styles.backgroundHome}>
                    <View style={styles.content}>
                        <View style={styles.backgroundImage} />
                        <Text style={styles.mainTitle}>
                            {/* <Text style={styles.highlight}>Doe</Text> e ajude pessoas */}
                        </Text>
                        {/* <Text style={styles.paragraph}>
                            Doar é uma prática que ajuda a suprir as necessidades, renovando a esperança e contribuindo para um mundo melhor.
                        </Text> */}
                        {/* <Text style={styles.actionText}>Faça parte dessa ação!</Text> */}
                    </View>
                </ImageBackground>

                <View id='quem-somos' style={styles.section}>
                    {/* <Text style={styles.sectionDescription}>
                        Nosso legado é construído não pelo que acumulamos para nós mesmos, mas pelo que compartilhamos com os outros, deixando marcas eternas nas vidas que tocamos.
                    </Text> */}
                    <Text style={styles.sectionTitle}>QUEM SOMOS</Text>
                    <Text style={styles.sectionText}>
                        A Dose de Esperança surgiu da paixão de um grupo dedicado de estudantes, todos nós apaixonados por tecnologia e determinados a fazer a diferença em nossas comunidades. Enquanto estamos no segundo ano do ensino médio, nos especializamos em informática e encontramos uma maneira inovadora de utilizar nossas habilidades para ajudar aqueles que mais precisam.
                        Somos movidos pelo desejo de transformar vidas e criar um impacto positivo em nossa sociedade. Nosso projeto nasceu da percepção das necessidades urgentes enfrentadas por pessoas carentes, especialmente quando se trata de acesso a medicamentos, suplementos e itens de primeiros socorros essenciais para o bem-estar. Foi então que decidimos agir e desenvolvemos um site dedicado a facilitar a doação de medicamentos usados, suprimentos de saúde e muito mais.
                    </Text>
                </View>

                <View id='nosso-proposito' style={styles.purposeSection}>
                    <Text style={styles.codeString}>{codeStringStart}</Text>
                    <Text style={styles.codeLine}>{"\"nossa_paixao\": \"Ajudar pessoas\","}</Text>
                    <Text style={styles.codeLine}>{"\"nossa_missao\": \"Salvar vidas\""}</Text>
                    <Text style={styles.codeString}>{codeStringEnd}</Text>
                    <Text style={styles.purposeTitle}>NOSSO PROPÓSITO</Text>
                    <Text style={styles.purposeText}>
                        Acreditamos no poder transformador da educação e da tecnologia. Desenvolvemos um inovador site chamado Dose de Esperança, que facilita a doação de medicamentos usados, suplementos e itens de primeiros socorros em bom estado. Nosso objetivo é criar uma plataforma inclusiva que permita às pessoas doar com facilidade, proporcionando a oportunidade de ajudar aqueles que enfrentam dificuldades em acessar esses recursos vitais. Estamos comprometidos em construir uma comunidade solidária, onde a compaixão e a tecnologia se unem para fazer a diferença.
                    </Text>
                </View>
                <Footer />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,

    },
    home: {
        flex: 1,
        backgroundColor: '#202020',
    },
    backgroundHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.5,
    },
    content: {
        alignItems: 'center',
        marginVertical: 50,

    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    mainTitle: {
        fontSize: 32,
        marginBottom: 24,
        textAlign: 'center',
        color: 'white'
    },
    highlight: {
        color: 'purple', // Substitua pela cor que preferir  
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
        width: '90%',
        marginBottom: 10,
        color: 'white'
    },
    actionText: {
        fontSize: 20,
        color: 'rgb(171, 2, 171)',
        marginTop: 25
    },
    section: {
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
        color: 'white'
    },
    sectionDescription: {
        textAlign: 'center',
        fontSize: 16,
        width: '90%',
        marginBottom: 10,
        color: 'white'
    },
    sectionTitle: {
        borderWidth: 4,               
        borderColor: 'purple',         
        color: '#ab02ab',             
        fontSize: 21,                
        paddingHorizontal: 10,         
        paddingVertical: 5,            
        marginBottom: '3%',            
        textAlign: 'center',
        marginTop: 20
    },
    sectionText: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 10,
        color: 'white'
    },
    purposeSection: {
        padding: 16,
        marginTop: 20,
        color: 'white'
    },
    codeString: {
        fontFamily: 'monospace',
        fontSize: 14,
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        color: 'white'
    },
    codeLine: {
        fontWeight: '700',
        color: 'white'
    },
    purposeTitle: {
        borderWidth: 4,               
        borderColor: 'purple',         
        color: '#ab02ab',             
        fontSize: 21,                
        paddingHorizontal: 10,         
        paddingVertical: 5,            
        marginBottom: '3%',            
        textAlign: 'center',
        width: '70%',
        marginLeft: 60
    },
    
    purposeText: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 10,
        color: 'white'
    },
});

export default Home;
