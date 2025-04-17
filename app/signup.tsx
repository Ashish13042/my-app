import { View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';
const Login = () => {

  const router = useRouter();


  const onLogin = () =>{
    router.push('/home');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={require('@/assets/images/login.jpg')}
      style={{width:"100%", height:300}} resizeMode='cover'/>
      <TextInput placeholder='Enter First Name' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1, margin:20,borderRadius:10}}/>
      <TextInput placeholder='Enter Last Name ' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1, margin:20,borderRadius:10}}/>
      <TextInput placeholder='Enter Your E-mail' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1, margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
      <TextInput placeholder='Create a Password' style={{borderWidth:1, paddingHorizontal:60, height:50, marginBottom:1,margin:20,borderRadius:10}}/>
    
      <MyButton title={"SignUp"} onPress={onLogin}/>
  
    </ScrollView>
    
  )
}

export default Login