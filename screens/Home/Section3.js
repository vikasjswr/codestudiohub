import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Section3 = () => {
  return (
    <View style={styles.tabContent}>
      <Text>Section 1 Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Section3;
