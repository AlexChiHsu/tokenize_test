import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import authSlice from '../../store/authSlice';
import { useAppSelector } from '../../app/hook';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const s = useAppSelector((state) => JSON.stringify(state))
  const handleLogin = async () => {
    // try {
    //   const result = await loginApi(username, password);
    //   dispatch(loginSuccess(result.token));
    // } catch (error) {
    //   dispatch(loginFailure(error.message));
    // }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;