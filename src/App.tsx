import 'react-native-gesture-handler';
import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks'

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#111114" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: "#111114" }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
)

export default App;
