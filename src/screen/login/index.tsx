import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {login} from '../../api/login/login';
import {useAppDispatch} from '../../store/store';
import {loginSuccess, loginFailure} from '../../store/authReducer';
import {useNavigation} from '@react-navigation/native';
import {Icon, Image, Input} from '@rneui/themed';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const result = await login(email, password);
    try {
      if (result) {
        dispatch(
          loginSuccess({
            email: result.data.email,
            token: result.data.token,
          }),
        );
        navigation.navigate('Home');
      }
    } catch (error) {
      dispatch(loginFailure(result.data.message));
    }
  };

  return (
    <Image
      source={require('../../asset/image/bg.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="cover">
      <SafeAreaView style={{alignItems: 'center'}}>
        <View style={{width: '100%', height: '100%'}}>
          <View style={{}}>
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
                width: '100%',
                height: '71%',
                fontSize: 15,
                lineHeight: 18,
                color: '#D6E1FF',
              }}
              placeholderTextColor="#D6E1FF"
              placeholder="Email"
              // secureTextEntry={true}
              leftIcon={
                <Image
                  source={require('../../asset/image/user_icon.png')}
                  style={{width: 17, height: 19, marginEnd: 9}}
                  resizeMode="cover"
                />
              }
            />
          </View>
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
          <TouchableOpacity onPress={handleLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Image>
  );
};

export default LoginScreen;
