import LoginScreen from '../screen/login';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/home';
import Market from '../screen/market';
import Test from '../screen/test/Test';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Markets"
          component={Market}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wallets"
          component={Test}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Portfolio"
          component={Test}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="More"
          component={Test}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
