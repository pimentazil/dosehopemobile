import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Install this library
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Inicio: undefined;
    Home: undefined;
    Contribuir: undefined;
    Login: undefined;
    Doacao: undefined;
    Formulario: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigation = useNavigation<NavigationProps>();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
                <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image source={require('../../imagens/doselogo2.png')} style={styles.logo} />
            </View>
            {isSidebarOpen && (
                <View style={styles.sidebar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.navItem}>
                        <Text style={styles.navText}>Início</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Contribuir')} style={styles.navItem}>
                        <Text style={styles.navText}>Contribuir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Doacao')} style={styles.navItem}>
                        <Text style={styles.navText}>Doações</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.navItem}>
                        <Text style={styles.navText}>Chat</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Formulario')} style={styles.navItem}>
                        <Text style={styles.navTexts}>Minha Conta</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
                        <Text style={styles.navTexts}>Sair</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#202020',
        paddingHorizontal: 20,
        elevation: 3,
        position: 'relative',
        zIndex: 3,
    },
   
    menuButton: {
        padding: 10,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 170, 
        height: 40, 
        resizeMode: 'contain', 
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1
    },
    sidebar: {
        position: 'absolute',
        top: 50,
        left: 0,
        backgroundColor: '#202020',
        width: '70%',
        paddingVertical: 10,
        zIndex: 1000,
    },
    navItem: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: 'white',
        textAlign: 'left',
        marginLeft: 10
    },
    navText: {
        color: 'white',
        fontSize: 16,
    },
    navTexts: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'purple',
        textAlign: 'center',
        width: '70%',
        padding: 6,
        borderRadius: 8
    }
});

