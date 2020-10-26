import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../styles';
import { CustomText } from './CustomText';

const styles = StyleSheet.create({
  text: {
    color: colors.error,
  },
});

export const ErrorText = ({ children, ...rest }) => (
  <CustomText style={styles.text} {...rest}>
    {children}
  </CustomText>
);
