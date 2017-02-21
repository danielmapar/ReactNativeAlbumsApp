// "import" is part of ES6

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// JSX is just a mask for React.createElement

// const App = () => <ReactNative.Text>Some Text</ReactNative.Text>;
const App = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1
  }
};


// Render it to the device
// ReactNative.AppRegistry.registerComponent('albumsApp', () => App);
AppRegistry.registerComponent('albumsApp', () => App);
