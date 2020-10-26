import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, buttonStyle } from '../styles';
import { CustomText } from './CustomText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  text: {
    color: 'white',
  },
});

export const MainButton = ({ title, ...rest }) => (
  <TouchableOpacity style={{ ...buttonStyle.button, ...styles.container }} {...rest}>
    <CustomText style={styles.text}>{title}</CustomText>
  </TouchableOpacity>
);
