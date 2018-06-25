import MainStack from './navigators/mainContainer';
import React from 'react';
import {StatusBar, View} from 'react-native';
import styled, {ThemeProvider} from "styled-components/native";
import Theme from '../theme';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { Provider } from 'react-redux';
import getConfig from  './store';
import { PersistGate } from 'redux-persist/integration/react'

const store = getConfig.store;
const persistor = getConfig.persistor;

class BalehuApp extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <View style={{flex:1}}>
          <StatusBar
            backgroundColor="rgba(12,52,61,1)"
            barStyle="light-content"
            />
            <ThemeProvider theme={Theme}>
            <MainStack/>
            </ThemeProvider>
        </View>
        </PersistGate>
      </Provider>
    );
  }
}
export default BalehuApp
