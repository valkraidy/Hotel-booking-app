import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Createaccount({navigation}) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  return (



    <View style={{flex:1,left:7}}>

<TouchableOpacity
        onPress={()=>navigation.navigate("Welcome")}
         style={{top:hp('8%')}}>

<AntDesign name="arrowleft" size={26} color="black" /> 
</TouchableOpacity>

     
        <View style={{top:hp('13%')}}>
            <Text style={{fontSize:24,fontWeight:700}}> 
                Welcome to Homelyn
            </Text>
            <Text style={{fontSize:14,fontWeight:400,color:'#A7AEC1'}}>
            Please login to your account 
            </Text>
        </View>

        <View style={{top: hp('20%')}}>
            <View>
                <Text style={{fontWeight:600,top:-10}}>
                    Phone Number
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
                    Password
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

            
            <View style={{fontWeight:400,fontSize:14}}>
            <TouchableOpacity
            onPress={() =>navigation.navigate("ForgetPassword")}
            >
                <Text style={{color:'#3D5BF6',textAlign:'left',flex:1,left:-10,top:10}}>
                    Forget Password?
                </Text>
            </TouchableOpacity>
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
              <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Login</Text>

            </TouchableOpacity>

            <View>
                <Text style={{color:'#A7AEC1',fontWeight:400,top:hp ('1.6%')}}>
                Or login with 
                </Text>
            </View>

           <View style={{flexDirection:'row',gap:10,marginBottom:"8%",top:hp ('4%')}}>

           <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyAccount")}
            style={{height:hp('6%'),
            width:wp ('42%'),
            backgroundColor:'#fff',
            borderRadius:46}} 
            >
              <Text style={{color:'#151B33',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>

                <Image
                 style={{left:-15}}
                
                source={require('../assets/google.png')}/>
               
                
                
                Google</Text>

            </TouchableOpacity>

            <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyAccount")}
            style={{height:hp('6%'),
            width:wp ('42%'),
            backgroundColor:'#486AB1',
            borderRadius:46}} 
            >
              <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>
                <FontAwesome name="facebook-f" size={24} color="#fff"
                style={{left:-15}} />
                Facebook</Text>

            </TouchableOpacity>

           </View>

           
            <TouchableOpacity

            onPress={()=>navigation.navigate("Createaccount")}
            
            
            
            style={{top:hp('4%')}}>
                <Text style={{fontSize:14,fontWeight:400}}>
                       Don't have an account?<Text style={{color:'#3D5BF6'}}> Register </Text>
                </Text>
            </TouchableOpacity>

       </View>
                  

      {/* <StatusBar style='auto'/> */}
    </View>
  )
}