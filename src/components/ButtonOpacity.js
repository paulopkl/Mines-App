import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const components = ({ style, onPress, styleText, text }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
        <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default components;