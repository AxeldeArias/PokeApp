import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors, globalStyles } from '../../../styles';
import { CustomText } from '../../../components/CustomText';
import { ErrorText } from '../../../components/ErrorText';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '90%',
  },
  input: {
    width: '100%',
  },
  show: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    right: 0,
    paddingRight: 15,
  },
  errorText: {
    color: colors.error,
  },
});

export const CustomTextInput = ({
  type = 'text',
  errorMessage,
  name,
  styleContainer,
  ...rest
}) => {
  const [secureEntry, setSecureEntry] = useState(type === 'password');
  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <CustomText style={styles.textStyle}>{name}</CustomText>
      <TextInput
        underlineColorAndroid="grey"
        style={{ ...styles.input, ...globalStyles.text }}
        maxLength={30}
        secureTextEntry={secureEntry}
        {...rest}
      />
      {type === 'password' && (
        <View style={styles.show}>
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <CustomText>{secureEntry ? 'Show' : 'Hide'}</CustomText>
          </TouchableOpacity>
        </View>
      )}
      {!!errorMessage && (
        <ErrorText>{errorMessage}</ErrorText>
      )}
    </View>
  );
};
