import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
  },
});
export const customParagraph = (text, textStyle) => () => (
  <View style={styles.section}>
    <CustomText style={textStyle}>
      {text}
    </CustomText>
  </View>
);
