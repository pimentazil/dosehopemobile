import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export default function Doacao() {
    const navigation = useNavigation();
    
    const newsArticles = [
        {
            title: "A importância do descarte correto de remédios",
            description: "Sabe aquele medicamento que te salva nos seus piores momentos, quando você...",
            date: "04/06/2024",
            image: "https://www.ceder.med.br/_next/image?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F700%2F1*2FGT119BEqqhzKVcg_xc9A.png&w=640&q=75",
        },
        {
            title: "A grave falta de remédios nas farmácias em 2023",
            description: "A princípio, não é novidade que dês do início da pandemia a procura por...",
            date: "04/06/2024",
            image: "https://www.ceder.med.br/_next/image?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F700%2F1*LYFtKb4_xqybLO78-PKt9Q.png&w=640&q=75",
        },
        {
            title: "Doação de remédios, a verdadeira importância",
            description: "De antemão, venho lhe dizer que este é um artigo que literalmente pode (e vai)...",
            date: "04/06/2024",
            image: "https://www.ceder.med.br/_next/image?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F720%2F1*9W_9mJvALTlkB5dgyCUYIw.jpeg&w=640&q=75",
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.divPrincipal}>
                <Text style={styles.doe}>Doe <Text style={styles.bold2}>medicamentos</Text></Text>
                <Text style={styles.subtitle}>Aqueles medicamentos que estão parados na sua prateleira podem ser úteis para nós. Aceitamos doações com gratidão.</Text>
                <TouchableOpacity style={styles.botaoDoar} >
                    <Text style={styles.botaoDoarText}>Quero doar qualidade de vida</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newsContainer}>
                <Text style={styles.sectionTitle}>Notícias</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {newsArticles.map((article, index) => (
                        <View style={styles.newsCard} key={index}>
                            <Image source={{ uri: article.image }} style={styles.newsImage} />
                            <Text style={styles.newsTitle}>{article.title}</Text>
                            <Text style={styles.newsDescription}>{article.description}</Text>
                            <Text style={styles.newsDate}>{article.date}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.divSaibaOqDoar}>
                <Text style={styles.h1OqueDoar}>O que <Text style={styles.bold}>doar?</Text></Text>
                <View>
                    <Text style={styles.listItem}><Text style={styles.bold}>Medicamentos Básicos:</Text> Inclua medicamentos comuns para resfriados, febres, dores, etc. </Text>
                    <Text style={styles.listItem}><Text style={styles.bold}>Medicamentos Específicos:</Text> Como aqueles para condições crônicas como diabetes, pressão alta, etc.</Text>
                    <Text style={styles.listItem}><Text style={styles.bold}>Suplementos:</Text> Inclua vitaminas e suplementos nutricionais. </Text>
                    <Text style={styles.listItem}><Text style={styles.bold}>Material de Primeiros Socorros:</Text> Curativos, pomadas e produtos para cuidados de feridas. </Text>
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
    divPrincipal: {
        padding: 20,
        alignItems: 'center',
    },
    doe: {
        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 30
    },
    bold2: {
        color: 'purple',
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold',
        color: 'rgb(171, 2, 171)',
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 15,
    },
    botaoDoar: {
        backgroundColor: 'purple',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        color: '#fff',
    },
    botaoDoarText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    newsContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop: 30,
        color: '#fff',
    },
    newsCard: {
        width: 300,
        marginRight: 15,
    },
    newsImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'rgb(171, 2, 171)',
    },
    newsDescription: {
        fontSize: 14,
        color: '#fff',
    },
    newsDate: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
    },
    divSaibaOqDoar: {
        padding: 20,
        color: '#fff',
        marginTop: 30
    },
    h1OqueDoar: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    listItem: {
        fontSize: 16,
        marginVertical: 8,
        color: '#fff',
    }
});
