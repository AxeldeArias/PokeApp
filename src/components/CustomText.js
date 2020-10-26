import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export const CustomText = ({ children, ...rest }) => (
  <Text style={{ ...styles.text, ...globalStyles.text }} {...rest}>
    {children}
  </Text>
);
