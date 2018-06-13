import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './containers/Home/Home';
import BarcodeScanner from './containers/Home/BarcodeScanner';
import SearchResult from './containers/Home/SearchResult';
import WebView from './components/WebView';

// Dirty fix for react-navigation issue & react-native issue
// https://github.com/react-navigation/react-navigation/issues/3956
// https://github.com/facebook/react-native/issues/18201
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Class RCTCxxModule was not exported',
]);

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  BarcodeScanner: { screen: BarcodeScanner },
  SearchResult: { screen: SearchResult },
  SearchWebView: { screen: WebView },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: '書本搜尋',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-search" size={25} color={tintColor}/>,
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(91, 184, 92)',
      inactiveTintColor: 'gray',
    },
  },
);
