import React from 'react';

import {Text, View} from 'react-native';
import {theme} from '../../styles/theme';

export const MainView = (props) => (
  <View style={{flex: 1}}>{props.children}</View>
);
export const NotConnectedView = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {props.children}
  </View>
);
export const AddUserView = (props) => (
  <View
    style={{alignItems: 'center', flex: 0.2, justifyContent: 'space-around'}}>
    {props.children}
  </View>
);
export const AddUserTitle = (props) => (
  <Text
    style={{
      fontFamily: theme.mainFontBold,
      color: theme.orange,
      fontSize: 24,
      textAlign: 'center',
    }}>
    {props.children}
  </Text>
);
export const TextInputView = (props) => (
  <View
    style={{
      width: 200,
      height: 30,
      backgroundColor: theme.mainWhite,
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}>
    {props.children}
  </View>
);
export const LoadingView = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
    {props.children}
  </View>
);
