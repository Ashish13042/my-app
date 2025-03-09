import { Redirect, Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return <Stack screenOptions={{ headerShown: false }}>
    <Redirect href="./tab" />
  </Stack>;
};

export default RootLayout;
