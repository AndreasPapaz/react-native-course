import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>
        Albums
      </Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
