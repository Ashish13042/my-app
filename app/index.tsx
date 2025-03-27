import { View } from 'react-native';
import React from 'react';
import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.push('/login');

  }

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <MyButton title={"Get Started"} onPress={onContinue} />
    </View>
  );
};

export default Index;