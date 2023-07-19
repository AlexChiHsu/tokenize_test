import {View} from 'react-native';
import React from 'react';
import {Image, Text} from '@rneui/themed';

const Header = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../asset/image/logo.png')}
        style={{width: 55, height: 55}}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 23,
          lineHeight: 30,
          letterSpacing: 0.5,
          fontWeight: '900',
          color: '#FFFFFF',
          marginTop: 24,
        }}>
        Sign in
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          letterSpacing: 0.3,
          fontWeight: '500',
          color: '#D6DFFF',
          marginTop: 9,
        }}>
        Please sign in to continue
      </Text>
    </View>
  );
};

export default Header;
