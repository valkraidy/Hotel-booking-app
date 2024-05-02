import { StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNewPassword from './screens/CreateNewPassword';
import ForgetPassword from './screens/ForgetPassword'
import AccountCreated from './screens/AccountCreated'
import VerifyAccount from './screens/VerifyAccount'
import Createaccount from './screens/Createaccount';
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
      options={{ headerShown: false }}
      />
     

    <Stack.Screen
      name='Onboarding2'
      component={Onboarding2}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name='Onboarding3'
      component={Onboarding3}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name='Welcome'
      component={Welcome}
      options={{ headerShown: false }}
      />
       <Stack.Screen
      name='Createaccount'
      component={Createaccount}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name ='VerifyAccount'
      component= {VerifyAccount}
      options={{ headerShown: false }}
      
      />
       <Stack.Screen
      name='AccountCreated'
      component={AccountCreated}
      options={{ headerShown: false }}
      />
       <Stack.Screen
      name='ForgetPassword'
      component={ForgetPassword}
      options={{ headerShown: false }}
      />
       <Stack.Screen
      name='CreateNewPassword'
      component={CreateNewPassword}
      options={{ headerShown: false }}
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
