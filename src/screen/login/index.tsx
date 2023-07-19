import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {login} from '../../api/login/login';
import {useAppDispatch} from '../../store/store';
import {loginSuccess, loginFailure} from '../../store/authReducer';
import {useNavigation} from '@react-navigation/native';
import {Button, Image, Input} from '@rneui/themed';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
      console.log(error);
      dispatch(loginFailure(result.data.message));
    }
  };

  return (
    <Image
      source={require('../../asset/image/bg.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="cover">
      <SafeAreaView style={{alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 10,
            justifyContent: 'space-evenly',
          }}>
          <Header />
          <Content
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
          />
          <Footer />
        </View>
      </SafeAreaView>
    </Image>
  );
};

export default LoginScreen;
