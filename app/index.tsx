import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/login'); // Delaying navigation slightly
    }, 100); 
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Optionally show a loading screen */}
    </View>
  );
};

export default Index;
