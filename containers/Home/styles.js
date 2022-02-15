import React from 'react';

import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../styles/theme';

export const MainView = (props) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: theme.mainWhite,
      alignItems: 'center',
      ...props.styles,
    }}>
    {props.children}
  </SafeAreaView>
);
export const Header = () => (
  <Image
    resizeMode="contain"
    style={{
      width: '80%',
      height: 100,
    }}
    source={{
      uri: 'https://www.trustyou.com/es/wp-content/uploads/2015/01/trustyou-logo.png',
    }}
  />
);
export const BodyView = (props) => (
  <View style={{flex: 0.8, justifyContent: 'space-around'}}>
    {props.children}
  </View>
);
export const TitleSection = (props) => (
  <View
    style={{
      backgroundColor: theme.blue,
      flex: 0.2,
      justifyContent: 'center',
      padding: 20,
    }}>
    {props.children}
  </View>
);

export const Title = (props) => (
  <Text
    style={{
      fontSize: 24,
      fontFamily: theme.mainFontMedium,
      textAlign: 'center',

      color: theme.mainWhite,
    }}>
    {props.children}
  </Text>
);

export const ButtonSection = (props) => (
  <View
    style={{
      marginTop: 20,
      height: 30,
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
    }}>
    {props.children}
  </View>
);
