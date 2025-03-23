import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView>
    <Drawer />
  </GestureHandlerRootView>
  )
}

export default DrawerRoot;