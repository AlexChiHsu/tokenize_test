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

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await login(email, password);
    try {
      dispatch(
        loginSuccess({
          email: result.data.email,
          token: result.data.token,
        }),
      );
    } catch (error) {
      dispatch(loginFailure(result.data.message));
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
