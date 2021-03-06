/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator,TabNavigator} from'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  DrawerNavigator ,
  DrawerItems ,
  } from 'react-navigation';

import MainContrainer from './containers/MainContrainer';
import Mine from './containers/Mine';
import Categary from './containers/Categary';
import CreateWallet from './pages/main/CreateWallet';
import QrcodeScan from './pages/main/QrcodeScan';
import QrCode from './pages/main/QrCode';
import ImportWallet from './pages/mine/ImportWallet';
import WalletList from './pages/mine/WalletList';
import MineInfo from './pages/mine/MineInfo';
import Transaction from './pages/main/Transaction';
const TabContainer=TabNavigator(
  {
    Main:{screen:MainContrainer},
    Categary:{screen:Categary},
    Mine:{screen:Mine},
  },
  {
    lazy:true,
    tabBarPosition: 'bottom',
    swipeEnabled:false,//不让滑动
    
    tabBarOptions:{
        
        activeTintColor:'#3e9ce9',
        scrollEnabled:false,
        inactiveTintColor: '#999999',
        showIcon:true,
        style:{
          backgroundColor:'#ffffff'
        },
        indicatorStyle:{
          opacity:0
        },
        tabStyle:{
          padding:0
        }
        
    }
  }
)
const App = StackNavigator(
  {
  
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    QrcodeScan:{
      screen: QrcodeScan,
    },
    CreateWallet:{
      screen: CreateWallet,
    },
    Qrcode:{
      screen: QrCode,
    },
    ImportWallet:{
      screen: ImportWallet,
    },
    WalletList:{
      screen: WalletList,
    },
    MineInfo:{
      screen: MineInfo,
    },
    Transaction:{
      screen: Transaction
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);



export default App;


