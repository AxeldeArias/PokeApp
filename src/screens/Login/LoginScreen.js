import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { MainButton } from '../../components/MainButton';
import { Screen } from '../../components/Screen';
import { colors } from '../../styles';
import { CustomTextInput } from './components/CustomTextInput';
import { useLoginSubmit } from './hooks/useLoginSubmit';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    marginTop: 25,
    width: '100%',
  },
  errorMessage: {
    textAlign: 'center',
    color: colors.error,
  },
});

export const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {
    errorMessages,
    handleOnPressLogin,
  } = useLoginSubmit(name, password, navigation);

  return (
    <Screen style={styles.container}>
      <CustomTextInput
        name="Name"
        styleContainer={styles.input}
        onChangeText={setName}
        errorMessage={errorMessages.name}
        value={name}
      />
      <CustomTextInput
        name="Password"
        styleContainer={styles.input}
        onChangeText={setPassword}
        errorMessage={errorMessages.password}
        value={password}
        type="password"
      />
      <MainButton onPress={handleOnPressLogin} title="Login" />
    </Screen>
  );
};
