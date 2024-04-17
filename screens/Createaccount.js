import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
// import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Createaccount({navigation}) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={{flex:1,left:7}}>

        <View>

        {/* <AntDesign name="arrowleft" size={24} color="black" /> */}

        <View style={{top:hp('5%')}}>

            <Text style={{fontSize:24,fontWeight:700}}> 
                Welcome to Homelyn
            </Text>

            <Text style={{fontSize:14,fontWeight:400,color:'#A7AEC1'}}>
            Lets create your account first
             
            </Text>


            </View>

            <View style={{top: hp('15%'),paddingBottom:('8%')}}>

            <View>
                <Text style={{fontWeight:600,paddingBottom:('3%')}}>
                    Full Name
                </Text>
                <TextInput
        style={{ height: 40, borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15 ,paddingBottom:('3%')}}
  
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder="Enter your username"
      />
               
            </View>

            
            <View>
                <Text style={{paddingTop:('3%'),fontWeight:600}}>
                    Phone Number
                </Text>
                <TextInput
      style={{height: hp('6%'), borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15,paddingBottom:('3%') }}
  
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        
        placeholder="Enter your number"
      />
               
            </View>

            
            <View>
                <Text style={{paddingTop:('3%'),fontWeight:600}}>
                    Password
                </Text>
                <TextInput
        style={{ height: 40, borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15,paddingBottom:('5%') }}
  
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
      />
               
            </View>

            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('30%')}}>
            <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyAccount")}


            
            style={{height:hp('7%'),
            width:wp ('90%'),
            backgroundColor:'#C4C9D6',
            borderRadius:46}} 
      
        
        >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Agree and Continue</Text>

        </TouchableOpacity>

                <TouchableOpacity style={{top:hp('4%')}}>
                    <Text style={{fontSize:14,fontWeight:400}}>
                        Have and account? <Text style={{color:'#3D5BF6'}}> Login  </Text>
                    </Text>
                </TouchableOpacity>
            </View>



        </View>




      
      <StatusBar style='auto'/>
    </View>
  )
}