import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/pages/Home';
import Login from '../../src/pages/Login';
import Cadastro from '../../src/pages/Cadastro';
import Inicio from '../pages/Inicio';
import Contribuir from '../pages/Contribuir';
import Doacao from '../pages/Doacao';
import Formulario from '../pages/Formulario';
// import Hotel from '../../src/screens/Hotel'
// import Register from '../screens/Cadastro';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> 
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Contribuir" component={Contribuir}  options={{ headerShown: false }}/>
        <Stack.Screen name="Doacao" component={Doacao} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
