import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/(tab)"}>go to tabs</Link>
      <Link href={"/(drawer)"}>go to drawers</Link>
    </View>
  );
};

export default Home;