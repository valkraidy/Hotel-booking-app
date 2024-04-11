import { Text ,Image,View,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'


// import { FontAwesome } from '@expo/vector-icons';

import React from 'react'

export default function Welcome() {
  return (
    <View style={{}}>

<View style={{flex:1,alignItems:'center',justifyContent:'center',top:hp('25%')}}>
          <Image
            resizeMethod='contain'
            source ={require('../assets/welc.png')}

            style={{height:hp('11%'),width: wp('20%')}}
            /> 

        </View>

        <View style={{alignItems:'center',top:hp('25%')}}>

        <Text style={{fontSize: hp('4%'),fontWeight:700,top: hp('4%')}}> Welcome to Hotelyn</Text>

        <Text style={{fontWeight:400,fontSize:hp('2%'),top: hp('5%'),textAlign:'center',color:'#A7AEC1'}}> If you are new here please create your account
        first before book the hotel.</Text>

        </View> 

       

        {/* TouchableOpacity */}

        <View style={{justifyContent:'center',alignItems:'center',top: hp('50%')}}>

        <TouchableOpacity style={{height:hp('7%'),width:wp ('90%'),backgroundColor:'#3D5BF6',borderRadius:46}} >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Create Account</Text>

        </TouchableOpacity>

        <TouchableOpacity>

        <Text style={{color:'#3D5BF6',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Login</Text>


        </TouchableOpacity>



        </View>
      
       
      
      <StatusBar style='auto'/>
    
    </View>
  )
}