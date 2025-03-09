import { Tabs } from "expo-router";
import React from "react";

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index"/>
        <Tabs.Screen name="about"/>
        <Tabs.Screen name="profile"/>

    </Tabs>
  );
};

export default TabRoot;