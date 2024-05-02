import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
 import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';



export default function Createaccount({navigation}) {
    const [fullName, setFullName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [password, setPassword] = useState('');
  return (
    <View style={{flex:1,left:7}}>
        <View>
            <TouchableOpacity
                onPress={()=>navigation.navigate("AccountCreated")}
                style={{top:hp('8%')}}>

                <AntDesign name="arrowleft" size={26} color="black" /> 
            </TouchableOpacity>
                <View style={{top:hp('13%')}}>

                    <Text style={{fontSize:24,fontWeight:700}}> 
                            Forget Password
                    </Text>

                    <Text style={{fontSize:14,fontWeight:400,color:'#A7AEC1'}}>
                          We've sent a verification code to 
                    <Text style={{color:'#3D5BF6'}}> +62 128 3972849</Text>
             
                    </Text>


                </View>

            <View style={{top: hp('23%')}}>
            <View>
                <Text style={{fontWeight:600,paddingBottom:('3%')}}>
                    Phone Number
                </Text>
                <TextInput
                    style={{ height: 40, borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15 ,paddingBottom:('3%')}}
            
                    value={fullName}
                
                    onChangeText={(text) => setFullName(text)}
                    placeholder=" +62 128 3972849"
                />
            </View>
            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('50%')}}>
            <TouchableOpacity style={{height:hp('7%'),width:wp ('90%'),backgroundColor:'#3D5BF6',borderRadius:46}} 
             onPress={()=>navigation.navigate("CreateNewPassword")}
        
              >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Send Code</Text>

           </TouchableOpacity>

               
            </View>



        </View>
      <StatusBar style='auto'/>
    </View>
  )
}