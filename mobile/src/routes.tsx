import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// const AppStack = createStackNavigator();
const { Navigator, Screen} = createStackNavigator();  //desestruturando

import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
            </Navigator>
        </NavigationContainer>
    );
}