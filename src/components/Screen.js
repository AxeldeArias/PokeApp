import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: colors.background,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
});

export const Screen = ({ style, children, ...rest }) => (
  <View style={{ ...styles.container, ...style }} {...rest}>
    <View style={styles.form}>
      {children}
    </View>
  </View>
);
