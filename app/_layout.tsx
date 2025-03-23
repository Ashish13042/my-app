import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

export default function TabLayout() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the "tabs" folder when the app opens
    router.push('/(tab)');
  }, [router]);

  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
    
  );
}
