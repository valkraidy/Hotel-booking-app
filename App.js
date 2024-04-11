import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './screens/SplashScreen'
 import Onboarding1 from './screens/Onboarding1';
 import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator()


export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name='Onboarding1'
      component={Onboarding1}
      />

    <Stack.Screen
      name='Onboarding2'
      component={Onboarding2}
      />
      <Stack.Screen
      name='Onboarding3'
      component={Onboarding3}
      />
      <Stack.Screen
      name='Welcome'
      component={Welcome}
      />
     
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
