import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { buttonStyle, colors } from '../styles';
import { CustomText } from './CustomText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  text: {
    color: 'white',
  },
});

export const SecondaryButton = ({ title, ...rest }) => (
  <TouchableOpacity style={{ ...buttonStyle.button, ...styles.container }} {...rest}>
    <CustomText style={styles.text}>{title}</CustomText>
  </TouchableOpacity>
);
