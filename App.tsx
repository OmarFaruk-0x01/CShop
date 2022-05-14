import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {extendTheme, NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AuthScreens from './src/Screens/AuthScreens';
import ForgotPasswordScreen from './src/Screens/AuthScreens/ForgotPasswordScreen';
import OTPValidationScreen from './src/Screens/AuthScreens/OTPValidationScreen';
import MainScreens from './src/Screens/MainScreens';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
  fontConfig: {
    neue: {
      100: {
        normal: 'HelveticaNeue',
      },
      200: {
        normal: 'HelveticaNeue',
      },
      300: {
        normal: 'HelveticaNeueLt',
      },
      400: {
        normal: 'HelveticaNeueMed',
      },
      500: {
        normal: 'HelveticaNeueMed',
      },
      600: {
        normal: 'HelveticaNeueBd',
      },
      700: {
        normal: 'HelveticaNeueBd',
      },
      800: {
        normal: 'HelveticaNeueHv',
      },
      900: {
        normal: 'HelveticaNeueHv',
      },
    },
  },
  fonts: {
    heading: 'neue',
    body: 'neue',
    mono: 'neue',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme} config={config}>
        <>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <MainScreens />
        </>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
