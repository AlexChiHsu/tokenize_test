import React from 'react';
import BottomTabNav from './BottomTabNav';

function HomeStackNav(Stack: any) {
  return <Stack.Screen name="Home" component={BottomTabNav} options={{}} />;
}
export default HomeStackNav;
