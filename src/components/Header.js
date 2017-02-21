import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
      flex: 0.1,
      height: 1,
      backgroundColor: '#F8F8F8',
      justifyContent: 'center', // vertical
      alignItems: 'center', // horizontal
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  textStyles: {
    fontSize: 20
  }
};

export default Header;
