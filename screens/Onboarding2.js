import { Text ,Image,View,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'

import { FontAwesome } from '@expo/vector-icons';

import React from 'react'

export default function Onboarding2({navigation}) {
  return (
    <View  style={{flex:1}}>

      <View>
          <Image
            resizeMethod='contain'
            source ={require('../assets/o2.png')}

            style={{height:hp('55%'),width: wp('100%')}}/> 

        </View>

        <View style={{flex:1,alignItems:'center'}}>

        <Text style={{fontSize: hp('4%'),fontWeight:700,top: hp('4%')}}> Make a Destination Plan</Text>

        <Text style={{fontWeight:400,fontSize:hp('2%'),top: hp('5%'),textAlign:'center',color:'#A7AEC1'}}>Choose the location and we have many hotel recommendations wherever you are.</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',padding:10,gap:6}}>
       
        <FontAwesome name="circle" size={8} color="#A7AEC1" />
        <FontAwesome name="circle" size={8} color="#3D5BF6" />
        <FontAwesome name="circle" size={8} color="#A7AEC1" />

        </View>




        {/* TouchableOpacity */}

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

        <TouchableOpacity style={{height:hp('6%'),width:wp ('90%'),backgroundColor:'#3D5BF6',borderRadius:46}} 
        
        onPress = {()=>navigation.navigate("Onboarding3")}
        
        >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Continue</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>navigation.navigate("Welcome")}>

        <Text style={{color:'#3D5BF6',textAlign:'center',top:hp ('2%'),fontSize:hp('2%'),fontWeight:700}}>Skip</Text>


        </TouchableOpacity>



        </View>
      
       
      
      <StatusBar style='auto'/>
    
    </View>
  )
} 