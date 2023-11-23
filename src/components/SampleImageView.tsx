import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const SampleImageView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../image/2668.jpg')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 100,
    left: '50%',
    resizeMode: 'stretch',
  },
});
