import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
// import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';


export default function Createaccount() {
    const [fullName, setFullName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [password, setPassword] = useState('');
  return (
    <View style={{flex:1,left:7}}>

        <View>

        {/* <AntDesign name="arrowleft" size={24} color="black" /> */}

        <View style={{top:hp('5%')}}>

            <Text style={{fontSize:24,fontWeight:700}}> 
                  Verify Your Account
            </Text>

            <Text style={{fontSize:14,fontWeight:400,color:'#A7AEC1'}}>
          We have sent a verification code to 
          <Text style={{color:'#3D5BF6'}}> +62 128 3972849</Text>
             
            </Text>


            </View>

            <View style={{top: hp('15%'),paddingBottom:('8%')}}>

            <View>
                <Text style={{fontWeight:600,paddingBottom:('3%')}}>
                      Verification code
                </Text>
                <TextInput
        style={{ height: 40, borderColor: '#E2E4EA', borderWidth: 1,height:hp('6%'),width: wp('100%'),borderRadius:15 ,paddingBottom:('3%')}}
  
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder="Resend in 2:14"
      />
               
            </View>

            
           

            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('50%')}}>
            <TouchableOpacity style={{height:hp('7%'),width:wp ('90%'),backgroundColor:'#3D5BF6',borderRadius:46}} 
        onPress={()=>navigation.navigate("Createaccount")}
        
        >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Verify Account</Text>

        </TouchableOpacity>

                <TouchableOpacity style={{top:hp ('4%')}}>
                    <Text style={{fontSize:14,fontWeight:400}}>
                      Didn't recieved the code?<Text style={{color:'#3D5BF6'}}> Resend </Text>
                    </Text>
                </TouchableOpacity>
            </View>



        </View>
      <StatusBar style='auto'/>
    </View>
  )
}