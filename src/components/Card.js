import React from 'react';
import { View } from 'react-native';

// Whenever we pass a component as a prop, it will show up as
// props.children
// Example:
/*
<Card>
  <Text>{props.album.title}</Text>
</Card>
*/

const Card = (props) => {
  const { containerStyle } = style;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0, // vertical shadow
        height: 2 // horizontal shadow
      },
      shadowOpacity: 0.1, // see-through
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
  }
};

export default Card;
