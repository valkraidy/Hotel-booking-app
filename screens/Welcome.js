import { Text ,Image,View,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'




import React from 'react'
export default function Welcome({navigation}) {
  return (
    <View style={{flex:1}}>

        <View style={{flex:1,alignItems:'center',justifyContent:'center',
        // top:hp('25%')
        }}>
          <Image
            source ={require('../assets/welc.png')}
            // style={{height:hp('11%'),width: wp('20%')}}
          /> 

        </View>

        <View style={{alignItems:'center',
        top:hp('-25%')
        }}>

          <Text style={{fontSize: hp('4%'),fontWeight:700,}}> Welcome to Hotelyn</Text>

          <Text style={{fontWeight:400,fontSize:hp('2%'),textAlign:'center',color:'#A7AEC1'}}> 
          If you are new here please create your account
          first before book the hotel.</Text>

        </View> 

       

        {/* TouchableOpacity */}

        <View style={{justifyContent:'center',alignItems:'center',
         top: hp('-7%')
        }}>

        <TouchableOpacity 
            onPress={()=>navigation.navigate("Createaccount")}  
            style={{height:hp('6%'),width:wp ('90%'),backgroundColor:'#3D5BF6',borderRadius:46}} 
        >
            <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>navigation.navigate("AccountCreated")} 
        >
        
          <Text style={{color:'#3D5BF6',textAlign:'center',fontSize:hp('2%'),fontWeight:700,top:hp('2%')}}>Login</Text>
        </TouchableOpacity>
        </View>
      
      <StatusBar style='auto'/>
    
    </View>
  )
}