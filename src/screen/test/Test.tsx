import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';

const Test = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
      <Button title={'go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Test;
