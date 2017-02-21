import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = style;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', // left to right
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
