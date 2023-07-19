import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';

const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
export default BottomTabNav;
