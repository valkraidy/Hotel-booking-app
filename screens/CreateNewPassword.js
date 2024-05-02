import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Createaccount({navigation}) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  return (



    <View style={{flex:1,left:7}}>

<TouchableOpacity
        onPress={()=>navigation.navigate("ForgetPassword")}
         style={{top:hp('8%')}}>

<AntDesign name="arrowleft" size={26} color="black" /> 
</TouchableOpacity>

     
        <View style={{top:hp('13%')}}>
            <Text style={{fontSize:24,fontWeight:700}}> 
                Create New Password
            </Text>
            <Text style={{fontSize:14,fontWeight:400,color:'#A7AEC1'}}>
            Enter the phone number, we'll send the code
            </Text>
        </View>

        <View style={{top: hp('20%')}}>
            <View>
                <Text style={{fontWeight:600,top:-10}}>
                   Password
                </Text>
                    <TextInput
                        style={{height: hp('6%'), borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15,paddingBottom:('3%'),color:'#A7AEC1' }}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder="Enter your number"
                        keyboardType='default'
                    />   
            </View>

            
            <View>
                <Text style={{paddingTop:('3%'),fontWeight:600}}>
                  Comfirm  Password
                </Text>
                     <TextInput
                        style={{ height: 40,
                             borderColor: '#E2E4EA',
                              borderWidth: 1,
                              height:hp('6%'),
                              width: wp('100%'),
                              borderRadius:15 ,
                              color:'#A7AEC1'}}
                
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Enter your password"
                        keyboardType='default'
                     /> 
            </View>

            
          
        </View>

        <View style={{justifyContent:'center',alignItems:'center',top: hp('30%')}}>
            <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyAccount")}
            style={{height:hp('6%'),
            width:wp ('90%'),
            backgroundColor:'#3D5BF6',
            borderRadius:46}} 
            >
              <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Reset Password</Text>

            </TouchableOpacity>


       </View>
                  

       <StatusBar style='auto'/> 
    </View>
  )
}