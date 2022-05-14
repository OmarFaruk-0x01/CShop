import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import OnBoardScreen from './OnBoardScreen';
import OTPValidationScreen from './OTPValidationScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const AuthStack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="onboard"
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <AuthStack.Screen name="onboard" component={OnBoardScreen} />
      <AuthStack.Screen name="signin" component={SignInScreen} />
      <AuthStack.Screen name="signup" component={SignUpScreen} />
      <AuthStack.Screen name="forgot" component={ForgotPasswordScreen} />
      <AuthStack.Screen name="validation" component={OTPValidationScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreens;
