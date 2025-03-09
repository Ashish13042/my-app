import { Tabs } from "expo-router";
import React from "react";

const TabRoot = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="about" />
        <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabRoot;