import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Purpose: undefined;
    Login: undefined;
    Cadastro: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function HeaderHome() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigation<NavigationProps>();

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <View style={styles.headerContainer}>
             <View style={styles.logoContainer}>
                <Image source={require('../../imagens/doselogo2.png')} style={styles.logo} />
            </View>

            <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
                <MaterialCommunityIcons name="menu" size={28} color="white" />
            </TouchableOpacity>

            {isMenuOpen && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.menuItem}>Início</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <Text style={styles.menuItem}>Quem Somos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Purpose')}>
                        <Text style={styles.menuItem}>Nosso Proposito</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Fazer Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
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
    hamburger: {
        padding: 10,
        zIndex: 4, 
        color: 'white',
    },
    menu: {
        position: 'absolute',
        top: 60,
        right: 0,
        backgroundColor: '#202020', 
        borderRadius: 8,
        padding: 10,
        elevation: 5,
        width: 180, 
        zIndex: 2, 
    },
    menuItem: {
        fontSize: 18,
        paddingVertical: 10, 
        paddingHorizontal: 10,
        color: 'white',
        textAlign: 'left',
    },
    buttonText: {
        fontSize: 18,
        color: 'rgb(171, 2, 171)',
        paddingVertical: 10,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold'
    },
});

