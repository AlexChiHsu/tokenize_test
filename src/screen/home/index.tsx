import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {store, useAppDispatch} from '../../store/store';
import {logout} from '../../store/authReducer';
import {useNavigation} from '@react-navigation/native';
import BottomNavBar from '../../common/BottomNavBar';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <View>
          <Text>HomeScreen</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            dispatch(logout());
            navigation.navigate('Login');
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <BottomNavBar />
    </>
  );
};

export default HomeScreen;
