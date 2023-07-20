import {View} from 'react-native';
import React from 'react';
import {Button, CheckBox, Image, Input} from '@rneui/themed';

const Content = ({
  email,
  setEmail,
  password,
  setPassword,
  isShowPassword,
  setIsShowPassword,
  isRemember,
  setIsRemember,
}: {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  isShowPassword: boolean;
  setIsShowPassword: Function;
  isRemember: boolean;
  setIsRemember: Function;
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
          fontFamily: 'Roboto',
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
          fontFamily: 'Roboto',
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CheckBox
          checked={isRemember}
          onPress={() => setIsRemember(!isRemember)}
          textStyle={{
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            color: '#FFFFFF',
          }}
          fontFamily="Roboto"
          containerStyle={{backgroundColor: 'transparent', padding: 0}}
          uncheckedColor="#FFFFFF33"
          checkedColor="#FFFFFF"
          title="Remember me"
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
        />
        <Button
          title="Forgot your password?"
          type="clear"
          titleStyle={{
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 21,
          }}
        />
      </View>
    </View>
  );
};

export default Content;
