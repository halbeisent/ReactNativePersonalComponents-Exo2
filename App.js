import React from 'react';
import { StyleSheet } from 'react-native';
import PictureDisplay from './src/components/picModule'

export default function App() {
  return (
    <PictureDisplay />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
