import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '@rneui/themed';

const Footer = ({handleLogin}: {handleLogin: Function}) => {
  return (
    <View>
      <Button
        onPress={() => handleLogin()}
        title={'Sign in'}
        containerStyle={{
          paddingHorizontal: 10,
        }}
        buttonStyle={{
          backgroundColor: '#BDCFFF',
          maxHeight: 45,
          elevation: 1.5,
          shadowColor: '#6278F1',
          shadowOffset: {width: 0, height: 6},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 24,
            fontWeight: '400',
            color: '#575E7A',
          }}>
          Don’t have an account yet?{' '}
        </Text>
        <Button
          onPress={() => {}}
          title={'SIGN UP'}
          type="clear"
          titleStyle={{
            fontFamily: 'Roboto',
            fontSize: 14,
            lineHeight: 24,
            fontWeight: '700',
            color: '#FFFFFF',
          }}
        />
      </View>
    </View>
  );
};

export default Footer;
