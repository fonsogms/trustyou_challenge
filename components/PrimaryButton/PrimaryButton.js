import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {theme} from '../../styles/theme';

const PrimaryButton = ({onPress = () => {}, style, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        backgroundColor: theme.orange,
        borderRadius: 3,
        width: 140,
        height: 50,
        ...style,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: theme.mainFontBold,
          color: theme.mainWhite,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
