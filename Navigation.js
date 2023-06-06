import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Accueil from './components/Accueil';
import Inscription from './components/Inscription';
import Rechercher from './components/Rechercher';
import Combinaisons from './components/Combinaisons';
import APropos from './components/Apropos';
import SignOut from './components/SignOut';
import Login from './components/Login';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Inscription" component={Inscription} />
        <Drawer.Screen name="Rechercher" component={Rechercher} />
        <Drawer.Screen name="Combinaisons" component={Combinaisons} />
        <Drawer.Screen name="APropos" component={APropos} />
        <Drawer.Screen name="SignOut" component={SignOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
