import { View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';
import { Link } from 'expo-router';

const Login = () => {

  const router = useRouter();



  const onLogin = () =>{
    router.push('/home');
  }


  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Image source={require('@/assets/images/login.jpg')}
      style={{width:"100%", height:300}} resizeMode='cover'/>
      <TextInput placeholder='Enter Your E-mail' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1, margin:20,borderRadius:10}}
      />
      <TextInput placeholder='Enter Your Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}
      />
      <MyButton title={"Login"} onPress={onLogin}/>
      <Link href="/signup" style={{color:'blue'}}>Go to Signup</Link>
      
    </View>
    
  )
}

export default Login