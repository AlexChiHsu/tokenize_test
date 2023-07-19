import {View} from 'react-native';
import React from 'react';
import {Button, Image, Input} from '@rneui/themed';

const Content = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  isShowPassword,
  setIsShowPassword,
}: {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  handleLogin: Function;
  isShowPassword: boolean;
  setIsShowPassword: Function;
}) => {
  return (
    <View>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        inputContainerStyle={{
          borderBottomWidth: 0,
          maxHeight: 47,
          borderWidth: 1.5,
          borderColor: '#FFFFFF1A',
          borderRadius: 5,
          backgroundColor: '#FFFFFF33',
          paddingHorizontal: 14,
        }}
        style={{
          fontSize: 15,
          lineHeight: 18,
          color: '#D6E1FF',
        }}
        placeholderTextColor="#D6E1FF"
        placeholder="Email"
        leftIcon={
          <Image
            source={require('../../asset/image/user_icon.png')}
            style={{width: 17, height: 19, marginEnd: 9}}
            resizeMode="cover"
          />
        }
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        inputContainerStyle={{
          borderBottomWidth: 0,
          maxHeight: 47,
          borderWidth: 1.5,
          borderColor: '#FFFFFF1A',
          borderRadius: 5,
          backgroundColor: '#FFFFFF33',
          paddingHorizontal: 14,
        }}
        style={{
          width: '100%',
          height: '71%',
          fontSize: 15,
          lineHeight: 18,
          color: '#D6E1FF',
        }}
        placeholder="Password"
        secureTextEntry={!isShowPassword}
        placeholderTextColor="#D6E1FF"
        leftIcon={
          <Image
            source={require('../../asset/image/password_icon.png')}
            style={{width: 17, height: 20, marginEnd: 9}}
            resizeMode="cover"
          />
        }
        rightIcon={
          <Image
            onPress={() => setIsShowPassword(!isShowPassword)}
            source={require('../../asset/image/eye_icon.png')}
            style={{width: 19, height: 13}}
            resizeMode="cover"
          />
        }
      />

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
    </View>
  );
};

export default Content;
