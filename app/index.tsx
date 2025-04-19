import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const MainCard = () => {
  return <View style={styles.mainCard}></View>
}

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((item, index) => {
            return <View key={index} style={[styles.mainCard, item != 1 && {marginTop: 20}]}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} style={styles.mainCardImage} resizeMode='cover'/>
              <Text style={styles.mainCardTitle}>Jignesh</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>{item}</Text> 
              </View>
            </View>
          })}
        </View>
      </View>
      <FlatList
       data={[1,2,3,4,5,6,7,8,9,10]}
       renderItem={({ item, index }) => {
        return (
         <View style={styles.card}>
          <View style={styles.cardDataContainer}>
            <Text style={styles.cardIndex}>{index + 1}</Text>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} style={styles.cardImage} resizeMode='cover'/>
            <Text style={styles.cardTitle}>Jignesh</Text>
          </View>
          <View style={styles.cardRankContainer}>
            <Text style={styles.cardRankTitle}>135,474</Text>
          </View>
        </View>
        );
       }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272C35',

  },
  topContainer: {
    backgroundColor: '#1A1F25',
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap:20,
    paddingBottom: 50,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  mainCard: {
    backgroundColor: '#272C35',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,
    height: 170,
  },
  mainCardContainer: {
    flexDirection: 'row',
    gap:10,
    justifyContent: 'center',
  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
  mainCardRankContainer: {
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: -15,
  },
  mainCardRankContainerText: {},
  card: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardIndex: {
    color: 'white',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,

  },
  cardTitle: {
    color: 'white',
    fontSize: 18
  },
  cardDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: 'orange',
  },
})

export default Index
