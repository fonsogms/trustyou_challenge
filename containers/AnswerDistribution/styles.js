import React from 'react';
import {ScrollView, View} from 'react-native';
import {theme} from '../../styles/theme';

export const MainView = (props) => (
  <ScrollView style={{flex: 1, backgroundColor: theme.mainWhite}}>
    {props.children}
  </ScrollView>
);
export const LoadingView = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
    {props.children}
  </View>
);
